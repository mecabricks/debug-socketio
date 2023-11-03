import { Server } from "socket.io";

const io = new Server("3001");

const nextNamespace = io.of("/next");

nextNamespace.on("connection", (socket) => {
  socket.onAny((eventName, ...args) => {
    console.log(
      `Received event "${eventName}" with data: ${JSON.stringify(args)}`
    );
  });
});
