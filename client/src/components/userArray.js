import React, { useState, useEffect } from "react";
import { socket } from "./sockets";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useArray from "./useArray";
import UserForm from "./userForm";

const UserArray = () => {

    // state
    const [isCopied1, setIsCopied1] = useState(false);

    // useArray //
    const [users, addUser, removeUserById, clearUsers] = useArray([]);

    const onCopy = () => {
        setIsCopied1(true);
        const copyTimer1 = setTimeout(() => {
            setIsCopied1(false);
        }, 5000);
        return () => {
            clearTimeout(copyTimer1);
        }
    };

    const addToArray = (value, id) => {
        addUser({ value, id })
    }

    const removeFromArray = id => {
        removeUserById(id);
    };

    const clearArray = () => {
        clearUsers();
    };

    const userItems = users.map(item =>
        <div style={{ fontWeight: "bold" }} key={item.id}>
            <span style={{ cursor: "pointer" }} onClick={() => removeFromArray(item.id)} aria-label="delete" role="img">❌</span>
            {item.value}
        </div>
    );

    const code1 = `
import { useCallback, useState } from "react";

const useArray = initial => {
    const [value, setValue] = useState(initial);

    const addValue = useCallback(a =>
         setValue(value => [...value, a]), []);
    const removeById = useCallback(id =>
         setValue(arr => arr.filter(v =>
             v && v.id !== id)), []);
    const clear = useCallback(() =>
     setValue(() => []), []);
    
    return [value, addValue, removeById, clear];
};

export default useArray;
`;

    useEffect(() => {
        socket.on("RECEIVE_USER", data => {
            addToArray(data.result, Math.floor((Math.random() * 10000) + 1))
        })
        return () => {
            socket.off("RECEIVE_USER");
        };
    }, [addUser]);

    return (
        <div className="section text-center">
            <h2>{users.length} {users.length === 1 ? "User" : "Users"}</h2>
            <div className="col-md-6 offset-md-3 text-left">
                {userItems}
            </div>
            <div className="button-div">
                <button style={{ color: "gold", textShadow: "1px 1px 1px black" }} className="btn btn-link btn-sm" onClick={clearArray}>Clear Users</button>
            </div>
            <UserForm socket={socket} />
            <h5>
                Copy useArray Hook
                <CopyToClipboard style={{ textAlign: "center" }} onCopy={onCopy} text={code1}>
                    <button className="btn btn-link btn-sm" data-toggle="tooltip" data-placement="bottom" title={isCopied1 ? "Copied!" : "Copy"}>
                        <span style={!isCopied1 ? { display: "inline-block" } : { display: "none" }} className="fa-stack">
                            <i style={{ color: "black" }} className="far fa-clipboard fa-stack-2x" />
                            <i style={{ color: "red" }} className="fas fa-long-arrow-alt-left fa-stack-1x" />
                        </span>
                        <span style={isCopied1 ? { display: "inline-block" } : { display: "none" }} className="fa-stack">
                            <i style={{ color: "black" }} className="far fa-clipboard fa-stack-2x" />
                            <i style={{ color: "green" }} className="fas fa-check fa-stack-1x" />
                        </span>
                    </button>
                </CopyToClipboard>
            </h5>
            <Highlight className="javascript text-left">
                <pre>
                    <code>{code1}</code>
                </pre>
            </Highlight>
        </div>
    );
};

export default UserArray;