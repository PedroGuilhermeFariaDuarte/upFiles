import { Socket } from "socket.io"

export default (io: Socket, socketID: string, data: any = {}, emit?: string) => {
  io.to(socketID).emit(emit || '', data)
}
