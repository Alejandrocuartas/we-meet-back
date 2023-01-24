import { io, server } from "./server";
import socketController from "./socket-control";

const port = process.env.PORT || 3000;

io.on("connection", socketController);

server.listen(port, () => {
    console.log("Server listening at", port);
});