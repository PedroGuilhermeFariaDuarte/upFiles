import { promisify } from "util"
import { pipeline } from "stream"
import { Socket } from "socket.io"

// Utils
import Logger from "../../../utils/looger"

// Middlewares
import busBoy from "../../../middlewares/busboy"

class StreamController {

  private pipeLineAsync: any = promisify(pipeline)

  async stream(request: any, response: any, io: Socket, socketID: string | string[] | undefined) {
    try {
      const { headers } = request;

      const BusBoy = new busBoy(io, socketID)

      const busboyInstance = BusBoy.registerEvents(headers,
        () => {
          response.writeHeader(200)
          return response.end()
        }
      )

      await this.pipeLineAsync(request, busboyInstance)

      Logger.info("Request finished with success!")
    }
    catch (error) {
      Logger.info("Stream Error: " + error?.message + " - Stream Code Error: " + error?.code)
    }
  }
}

export default new StreamController()
