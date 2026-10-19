import { Server } from "socket.io";

export default function initializeSocketServer(httpServer) {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("elon", (msg) => {
      console.log("elon event received", msg);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
    });
  });
}
