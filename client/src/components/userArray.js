import React, { useEffect } from "react";
import { socket } from "./sockets";
import useArray from "./useArray";
import UserForm from "./userForm";

const UserArray = () => {

    // useArray //
    const [users, addUser, removeUserById, clearUsers] = useArray([]);

    const addToArray = (value, id) => {
        addUser({value, id})
    }

    const removeFromArray = id => {
        removeUserById(id);
    };

    const clearArray = () => {
        clearUsers();
    };

    const userItems = users.map(item =>
        <div style={{ fontWeight: "bold" }} key={item.id}>
            {item.value}
            <button className="btn btn-link btn-sm" onClick={() => removeFromArray(item.id)}>Delete</button>
        </div>
    );

    useEffect(() => {
        socket.on("RECEIVE_USER", data => {
            addToArray(data.result, Math.floor((Math.random() * 10000) + 1))
        })
        return () => {
            socket.off("RECEIVE_USER");
        };
    }, [addUser]);

    return (
        <div className="section">
            <h2>Users Array</h2>
            <div style={{ textDecorationLine: "underline" }}><span>{users.length}</span> {users.length === 1 ? "User" : "Users"}</div>
            <div className="text-center">{userItems}</div>
            <div className="button-div">
                <button className="btn btn-link btn-sm" onClick={clearArray}>Clear Users</button>
            </div>
            <UserForm />
        </div>
    );
};

export default UserArray;