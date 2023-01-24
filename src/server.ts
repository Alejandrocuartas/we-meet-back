import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

//routers imports
import { userRouter } from "./routes";

//inicializations
const app = express();
const server = createServer(app);
const io = new Server(server);

//basic middlewares
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "*",
}));

//routes
app.use("/api", userRouter);

export { io, app, server };