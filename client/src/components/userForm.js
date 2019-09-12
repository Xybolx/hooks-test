import React, { useContext } from "react";
import { socket } from "./sockets";
import UserContext from "./user_context/context"
import useForm from "./useForm";

const UserForm = () => {

    // context
    const { user, setUser } = useContext(UserContext);

    // useForm //
    const [values, handleChange, handleClearForm] = useForm();

    const { result } = values;

    const handleFormSubmit = ev => {
        ev.preventDefault();
        setUser(result);
        socket.emit("SEND_USER", {
            result
        });
        handleClearForm();
    };

    return (
        <div>
            <div>
                Current User is: <span>{user}</span>
            </div>
            <button className="btn btn-link btn-sm" onClick={() => setUser(null)}>Clear User</button>
            <div style={{ fontWeight: "bold" }}>{result ? result : "CLEARED"}</div>
            <div className="form-group">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="result"
                        value={result || ""}
                        placeholder="type a username..."
                        onChange={handleChange}
                    />
                    <button className="btn btn-link btn-sm" type="submit">Set User</button>
                </form>
                <button className="btn btn-link btn-sm" onClick={handleClearForm}>Clear</button>
            </div>
        </div>
    );
};

export default UserForm;