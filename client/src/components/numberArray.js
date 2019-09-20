import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Highlight from "react-highlight";
import useArray from "./useArray";

const NumberArray = () => {

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

    const code2 = `const [numbers, addNumber, removeById, clearNumbers] = useArray([]);`;

    // useArray //
    const [items, addItem, removeItemById, clearItems] = useArray([]);

    // map each array item to a div //
    const arrayItems = items.map(item =>
        <div style={{ fontWeight: "bold" }} key={item.id}>
            <span style={{ cursor: "pointer" }} onClick={() => removeItemById(item.id)} aria-label="delete" role="button">❌</span>
            {item.value}
        </div>
    );

    return (
        <div className="section">
            <h2>{items.length} {items.length !== 1 ? "Numbers" : "Number"}</h2>
            <div className="col-md-6 offset-md-3">
                <div className="col-md-6 offset-md-3 text-left">
                    {arrayItems}
                </div>
            </div>
            <div className="button-div">
                <button
                    style={{ marginRight: 10, color: "green", textShadow: "1px 1px 1px black" }}
                    className="btn btn-link btn-sm"
                    onClick={
                        () => addItem({
                            value: Math.floor((Math.random() * 10000) + 1),
                            id: Math.floor((Math.random() * 100000) + 1)
                        })}>
                    Add Number
                    </button>
                <button
                    style={{ color: "gold", textShadow: "1px 1px 1px black" }}
                    className="btn btn-link btn-sm"
                    onClick={() => clearItems()}>
                    Clear Numbers
                    </button>
            </div>
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
            <Highlight className="javascript text-left">
                <pre>
                    <code>{code2}</code>
                </pre>
            </Highlight>
        </div>
    );
};

export default NumberArray;