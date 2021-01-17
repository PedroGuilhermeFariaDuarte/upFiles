import http, { Server } from "http"
import socketIO, { Socket } from "socket.io"

// Routes
import Routes from "../routers"

// Utils
import Logger from "../utils/looger"

class App {
  server!: Server
  socket!: Socket

  constructor() {
    this.init()
    this.io()
  }

  init() {
    this.server = http.createServer(this.handler)

    // @ts-ignore
    this.socket = socketIO(this.server, {
      cors: {
        origin: "*",
        credentials: false
      }
    })

    global.__socket = this.socket;
  }

  handler(request: any, response: any) {
    const routes = new Routes(global.__socket)

    const defaultRoute = async (_request: any, response: any) => response.end("Hello")
    // @ts-ignore
    const methodToRequest: Function = routes[ request.method.toLowerCase() ] || defaultRoute


    return methodToRequest.apply(routes, [ request, response ])
  }

  io() {
    this.socket.on("connection", (socket) => {
      Logger.info('someone connected' + socket.id)
    })
  }
}

export default new App().server
