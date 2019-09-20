import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useToggle from "./useToggle";

const Toggle = () => {

    // useToggle //
    const [isToggled, toggleValue] = useToggle(false);

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
import { useState } from "react";

const useToggle = initial => {
    const [value, setValue] = useState(initial);

    const toggleValue = () => setValue(!value);
    
    return [value, toggleValue];
};

export default useToggle;
`;

    const code2 = `const [isToggled, toggleValue] = useToggle(false);`

    return (
        <div className="section toggle">
            <h2>Power The Sign</h2>
            <div style={{ backgroundColor: "black" }}>
                <img style={isToggled ? { opacity: 1, backgroundColor: "black" } : { opacity: 0 }} className="img-fluid" alt="" src="https://earthlymission.com/wp-content/uploads/2015/03/Neon-Movie-Posters-in-GIF-15.gif" />
                <div style={{ backgroundColor: "black", paddingBottom: 20 }}>
                    <span aria-label="toggle" role="img">⚡</span>
                    <button
                        style={isToggled ? { color: "green" } : { color: "red" }}
                        className="btn btn-link btn-md"
                        onClick={toggleValue}>
                        {isToggled ? "ON" : "OFF"}
                    </button>
                </div>
            </div>
            <h5>
                Copy useCountdown Hook
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

export default Toggle;