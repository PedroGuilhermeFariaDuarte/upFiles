import { createWriteStream } from "fs"
import { Socket } from "socket.io"
import { pipeline } from "stream"
import { promisify } from "util"
import { join } from "path"
import busBoy from "busboy"

// Utils
import Logger from "../../utils/looger"
import folders from "../../utils/folders/index.json"

// Middlewares
import responseIO from "../responseIO"

class BusBoy {
  private io!: Socket
  private socketID!: string | string[] | undefined
  private pipeLineAsync: any = promisify(pipeline)

  constructor(io: Socket, socketID: string | string[] | undefined) {
    this.io = io;
    this.socketID = socketID
  }

  registerEvents(headers: any, onFinish: Function) {
    const busboy = new busBoy({ headers })

    busboy.on("file", this.handlerOnFile.bind(this))

    busboy.on("finish", onFinish)

    return busboy
  }

  private handlerLoadFileBytes(_filename: string) {
    // function generator e closure function e pipeline stream
    async function* handlerFileData(data: any) {
      for await (const item of data) {
        const size = item.length
        //Logger.info(`File ${filename} got ${size} bytes to ${this.socketID}`)
        // @ts-ignore
        responseIO(this.io, this.socketID, size, "file-uploaded")
        yield item
      }
    }

    return handlerFileData.bind(this)
  }

  private async handlerOnFile(_fieldname: string, file: ArrayBuffer | any,
    filename: string, _encoding: string, mimetype: string) {

    // @ts-ignore
    const folderFile = folders[ mimetype ] || 'others'

    filename = filename.replace(/^.*?./, `${Math.floor(Math.random() * 100) + Date.now()}`)

    const saveToPath = join(__dirname, "../", "../", "temp", folderFile, filename)

    Logger.info("Saving the file's in " + saveToPath)

    await this.pipeLineAsync(
      file,
      this.handlerLoadFileBytes.apply(this, [ filename ]),
      createWriteStream(saveToPath)
    )

    Logger.info(`File ${filename} finished!`)
  }
}

export default BusBoy
