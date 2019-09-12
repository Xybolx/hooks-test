import React from "react";
import useMyBoolean from "./useMyBoolean";

const Choose = () => {

    // useMyBoolean //
    const [boolean, setTrue, setFalse] = useMyBoolean(false);

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
        </div>
    );
};

export default Choose;