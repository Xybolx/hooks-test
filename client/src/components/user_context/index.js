import React, { useState, useMemo } from "react";
import UserContext from "./context";

const UserProvider = props => {

    const [user, setUser] = useState(null);

    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <UserContext.Provider value={ userValue }>
            { props.children }
        </UserContext.Provider>
    );
};

export default UserProvider;