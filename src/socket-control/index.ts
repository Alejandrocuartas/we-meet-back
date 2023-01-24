import { Socket } from "socket.io";

const socketController = (socket: Socket) => {
    socket.on("get-users", () => {
        socket.emit("send-users", "users");
    });
};

export default socketController;