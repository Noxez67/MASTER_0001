import io, {Socket} from 'socket.io-client';
import {createContext} from "react";

const {apiUrl} = require("../config.json");

export const socket: Socket = io(apiUrl, {
    extraHeaders: {
        "jwt": localStorage.getItem("token") ?? ""
    }
});
export const SocketContext = createContext(socket);
