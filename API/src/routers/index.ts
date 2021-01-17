import { Socket } from "socket.io"
import UrlParse from "url"

// Controllers
import StreamController from "../App/controllers/Stream"

class Routes {
  private io!: Socket

  constructor(io: Socket) {
    this.io = io
  }

  async options(_request: any, response: any) {
    response.writeHeader(204,
      {
        'Access-Crontrol-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST'
      }
    )

    response.end()
  }

  async post(request: any, response: any) {
    const { query: { socket } } = UrlParse.parse(request.url, true)
    StreamController.stream(request, response, global.__socket, socket)
  }
}

export default Routes
