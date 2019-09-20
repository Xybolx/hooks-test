import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useCountdown from "./useCountdown";

const Countdown = () => {

    // useCounter as a countdown
    const [countdown, decrement, clear] = useCountdown(5);

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
import { useCallback, useState } from "react";

const useCountdown = initial => {
    const [value, setValue] = useState(initial);

    const decrement = useCallback(() =>
     setValue(value => value - 1), []);
    const clear = () => setValue(initial);

    return [value, decrement, clear];
};

export default useCountdown;
`;

    const code2 = `const [countdown, decrement, resetCountdown] = useCountdown(5);`

    useEffect(() => {
        if (countdown === -1) {
            clear();
        }
        const countdownInterval = setInterval(() => {
            decrement();
        }, 1000);
        return () => {
            clearInterval(countdownInterval);
        }
    }, [countdown, decrement, clear]);

    return (
        <div className="section countdown">
            <h2 className="countdown-header">Countdown</h2>
            <div className="space">
                <div style={{ color: "yellow", paddingTop: 20 }}>Countdown: <span className="result-span">{countdown === 0 ? "\"ALL CLEAR KID!\"" : countdown}</span></div>
                <div style={{ color: "yellow" }}>The Death Star is: <span className="result-span">{countdown === 0 ? "DESTROYED" : "OPERATING"}</span></div>
                <span><img className="img-fluid" alt="" src={countdown === 0 ? "https://media.giphy.com/media/MLUb2IRXoTUHe/giphy.gif" : "http://iconbug.com/data/b5/256/67561e3e378f8513c81b977aa9d662b6.png"} /></span>
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

export default Countdown;