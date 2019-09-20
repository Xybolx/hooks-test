import React from "react";
import io from "socket.io-client";
import SocketContext from "./context";

const socket = io("http://localhost:3001/");

const SocketProvider = ({ children }) => {

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;