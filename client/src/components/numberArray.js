import React, { useMemo } from "react";
import useArray from "./useArray";
import SpeechRecognition from "./speechRecognition";

const NumberArray = () => {

    // useArray //
    const [items, addItem, removeItemById, clearItems] = useArray([]);

    // map each array item to a div //
    const arrayItems = items.map(item =>
        <div style={{ fontWeight: "bold" }} key={item.id}>
            {item.value}
            <button className="btn btn-link btn-sm" onClick={() => removeFromArray(item.id)}>Delete</button>
        </div>
    );

    // const addToArray = () => {
    //     addItem({
    //         value: Math.floor((Math.random() * 10000) + 1),
    //         id: Math.floor((Math.random() * 100000) + 1)
    //     });
    // };

    const removeFromArray = id => {
        removeItemById(id);
    };

    const clearArray = () => {
        clearItems();
    };

    return (
        <div className="section">
            <SpeechRecognition addItem={addItem} clearArray={clearArray} />
            <h2>Numbers Array</h2>
            <div className="text-center">
                <div style={{ textDecorationLine: "underline" }}><span>{items.length}</span> {items.length !== 1 ? "Numbers" : "Number"}</div>
            {arrayItems}
            </div>
            <div className="button-div">
                <button style={{ marginRight: 5 }} className="btn btn-link btn-sm" onClick={addItem({ value: Math.floor((Math.random() * 10000) + 1), id: Math.floor((Math.random() * 100000) + 1) })}>Add Number</button>
                <button className="btn btn-link btn-sm" onClick={clearArray}>Clear Items</button>
            </div>
        </div>
    );
};

export default NumberArray;