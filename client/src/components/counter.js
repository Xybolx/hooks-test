import React from "react";
import useCounter from "./useCounter";

const Counter = () => {

    // useCounter //
    const [count, increment, decrement, clearCount] = useCounter(0);

    return (
        <div className="section">
            <h2>Counter</h2>
            <div>Count is: <span>{count}</span></div>
            <div>
                <button className="btn btn-link btn-sm" onClick={increment}>Increment</button>
                <button className="btn btn-link btn-sm" onClick={decrement}>Decrement</button>
                <button className="btn btn-link btn-sm" onClick={clearCount}>Clear</button>
            </div>
        </div>
    );
};

export default Counter;