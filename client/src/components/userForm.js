import React, { useState, useContext } from "react";
import UserContext from "./user_context/context";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useForm from "./useForm";

const UserForm = ({ socket }) => {

    // context
    const { user, setUser } = useContext(UserContext);

    // state
    const [isCopied1, setIsCopied1] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);

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

    const onCopy = () => {
        setIsCopied1(true);
        const copyTimer1 = setTimeout(() => {
            setIsCopied1(false);
        }, 5000);
        return () => {
            clearTimeout(copyTimer1);
        }
    };

    const onCopy2 = () => {
        setIsCopied2(true);
        const copyTimer2 = setTimeout(() => {
            setIsCopied2(false);
        }, 5000);
        return () => {
            clearTimeout(copyTimer2);
        }
    };

    const code1 = `
import { useState } from 'react';

const useForm = () => {
    const [state, setState] = useState({});

    const handleChange = ev => {
        ev.persist();
        const { name, value } = ev.target;
        setState(state =>
             ({ ...state, [name]: value }))
    };

    const handleClearForm = () => {
        setState({});
    };

    return [state, handleChange, handleClearForm];
};

export default useForm;
`;

    const code2 = `
import React from "react";
import useForm from "./useForm";

    const App = () => {
        const [values, handleChange, handleClearForm] = useForm();

        const { username } = values;

        const handleSubmit = ev => {
            ev.preventDefault();
            console.log(username);
            handleClearForm(); 
        };

    return(
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username || ""}
                onChange={handleChange}>
            </input>
            <button type="submit">Set User</button>
            </form>       
        );
    };

    export default App;
    `;

    return (
        <div>
            <div>
                Current User is: <span className="result-span">{user}</span>
            </div>
            <button
                style={{ color: "gold", textShadow: "1px 1px 1px black" }}
                className="btn btn-link btn-sm"
                onClick={() => setUser(null)}>
                Clear User
            </button>
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
                    <button
                        style={{ color: "green", textShadow: "1px 1px 1px black" }}
                        className="btn btn-link btn-sm"
                        type="submit">
                        Set User
                    </button>
                </form>
                <button
                    style={{ color: "gold", textShadow: "1px 1px 1px black" }}
                    className="btn btn-link btn-sm"
                    onClick={handleClearForm}>
                    Clear
                </button>
            </div>
            <h5>
                Copy useForm Hook
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
            <div className="text-left">
                <Highlight className="javascript">
                    <pre>
                        <code>{code1}</code>
                    </pre>
                </Highlight>
            </div>
            <h5>
                Copy For Component
                <CopyToClipboard style={{ textAlign: "center" }} onCopy={onCopy2} text={code2}>
                    <button className="btn btn-link btn-sm" data-toggle="tooltip" data-placement="bottom" title={isCopied2 ? "Copied!" : "Copy"}>
                        <span style={!isCopied2 ? { display: "inline-block" } : { display: "none" }} className="fa-stack">
                            <i style={{ color: "black" }} className="far fa-clipboard fa-stack-2x" />
                            <i style={{ color: "red" }} className="fas fa-long-arrow-alt-left fa-stack-1x" />
                        </span>
                        <span style={isCopied2 ? { display: "inline-block" } : { display: "none" }} className="fa-stack">
                            <i style={{ color: "black" }} className="far fa-clipboard fa-stack-2x" />
                            <i style={{ color: "green" }} className="fas fa-check fa-stack-1x" />
                        </span>
                    </button>
                </CopyToClipboard>
            </h5>
            <div className="text-left">
                <Highlight className="javascript">
                    <pre>
                        <code>{code2}</code>
                    </pre>
                </Highlight>
            </div>
        </div>
    );
};

export default UserForm;