import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useCounter from "./useCounter";

const Counter = () => {

    // useCounter //
    const [count, increment, decrement, clearCount] = useCounter(0);

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

const useCounter = initial => {
    const [value, setValue] = useState(initial);
    
        const increment = useCallback(() =>
         setValue(value => value + 1), []);
        const decrement = useCallback(() =>
         setValue(value => value - 1), []);
        const clear = () => setValue(() => initial);

        return [value, increment, decrement, clear]
}

export default useCounter;
`;

    const code2 = `const [count, increment, decrement, clearCount] = useCounter(0);`

    return (
        <div className="section">
            <h2>Counter</h2>
            <div>Count is: <span className="result-span">{count}</span></div>
            <div>
                <button style={{ color: "green", textShadow: "1px 1px 1px black" }} className="btn btn-link btn-sm" onClick={increment}>Increment</button>
                <button style={{ color: "red", textShadow: "1px 1px 1px black" }} className="btn btn-link btn-sm" onClick={decrement}>Decrement</button>
                <button style={{ color: "gold", textShadow: "1px 1px 1px black" }} className="btn btn-link btn-sm" onClick={clearCount}>Clear</button>
            </div>
            <h5>
                Copy useCounter Hook
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
            <Highlight style={{ textAlign: "center" }} className="javascript">
                <pre>
                    <code>{code2}</code>
                </pre>
            </Highlight>
        </div>
    );
};

export default Counter;