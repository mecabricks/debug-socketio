import { io } from "socket.io-client";

const connectToSocketServer = () => {
  if (global.websocket) return global.websocket;

  const websocket = io(`ws://localhost:3001/next`, {
    transports: ["websocket"],
  });
  global.websocket = websocket;

  return websocket;
};

const socket = connectToSocketServer();

export const GET = async () => {
  socket.emit("partLibraryIconEvent", { test: "abc" });
  socket.emit("partLibraryIconEvent", { test: "abcd" });
  socket.emit("partLibraryIconEvent", { test: "123" });

  return Response.json({ page: "test" });
};

export const dynamic = "force-dynamic";
