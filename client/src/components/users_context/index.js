import React, { useState, useMemo } from "react";
import useArray from "../useArray";
import UsersContext from "./context";

const UsersProvider = props => {

    const [users, addUser, removeUser, clearUsers] = useArray([]);

    const usersValue = useMemo(() => ({ users, addUser, removeUser, clearUsers }), [users, addUser, removeUser, clearUsers]);

    return (
        <UsersContext.Provider value={usersValue}>
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;