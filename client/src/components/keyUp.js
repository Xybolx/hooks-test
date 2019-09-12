import React, { useEffect, useState } from 'react';
import { useKeyUp }from './events';

const KeyUp = () => {

    const [isKeyUp, setIsKeyUp] = useState(false);
        
    useKeyUp(ev => setIsKeyUp(true));

        useEffect(() => {
            const keyUpTimer = setTimeout(setIsKeyUp(false), 2000);
            return () => {
                clearTimeout(keyUpTimer)
            };
        }, [])

        return (
            <div>
                <h1>Key Up Test</h1>
                <div>The User is: <span style={{ fontWeight: "bold" }}>{!isKeyUp ? "NOT" : ""}</span> typing...</div>
            </div>
        );
}

export default KeyUp;
