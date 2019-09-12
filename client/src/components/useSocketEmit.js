import { useState, useCallback } from "react";
import { socket } from "./sockets";
import useSetState from "./useSetState";

const useSocketEmit = ({eventName, data}) => {
    const [state, setState] = useState({
        eventName,
        data
})
    return {
        ...state,
        setState,
        emit: useCallback(() => socket.emit(eventName, data))
    }
};

export default useSocketEmit;