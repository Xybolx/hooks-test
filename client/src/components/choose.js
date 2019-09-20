import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useMyBoolean from "./useMyBoolean";

const Choose = () => {

    // useMyBoolean //
    const [boolean, setTrue, setFalse] = useMyBoolean(false);

    // state
    const [isCopied1, setIsCopied1] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);

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
import { useState, useCallback } from "react";

const useBoolean = initial => {
    const [value, setValue] = useState(initial);

    const setTrue = useCallback(() =>
     setValue(true), []);
    const setFalse = useCallback(() =>
     setValue(false), []);
    const setToggle = useCallback(() =>
     setValue(value => !value), []);

    return [value, setTrue, setFalse, setToggle];
}

export default useBoolean;
`;

    const code2 = `const [value, setTrue, setFalse] = useMyBoolean(false);`;

    return (
        <div className="section">
            <h2>Blue Or Red Pill?</h2>
            <div className="p-pills">
                <div className="pill-container">
                    {boolean ? "\"Embrace the sometimes painful truth of reality...\"" : "\"Remain in the blissful ignorance of illusion...\""}
                    <div>
                        <span onClick={setFalse} style={!boolean ? { border: ".5px solid yellow" } : { border: ".5px solid transparent" }} className="badge badge-pill badge-primary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span onClick={setTrue} style={boolean ? { border: ".5px solid yellow" } : { border: ".5px solid transparent" }} className="badge badge-pill badge-danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                </div>
            </div>
            <h5>
                Copy useBoolean Hook
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
            <Highlight className="javascript text-center">
                <pre>
                    <code>{code2}</code>
                </pre>
            </Highlight>
        </div>
    );
};

export default Choose;