import { useEffect, useState } from "react";
import { socket } from "./sockets";
import useSetState from "./useSetState";

const useSocketEmit = (eventName, { data }) => {
    const [isEmiting, setIsEmiting] = useState(false);

    useEffect(() => {
        if (isEmiting) {
            socket.emit(eventName, data)
        }
    }, []);

    const setEmit = () => setIsEmiting(true);

    const clearEmit = () => setIsEmiting(false);

    return [setEmit, clearEmit];
};

export default useSocketEmit;