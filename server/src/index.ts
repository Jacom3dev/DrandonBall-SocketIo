import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {config} from "dotenv";
import { Sockets } from "./models/sockets";

config();
const app = express();
const PORT = process.env.PORT;
const httpServer = createServer(app);
const io = new Server(httpServer);

new Sockets(io);

httpServer.listen(PORT,()=>console.log(PORT));