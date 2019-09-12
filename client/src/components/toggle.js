import React from "react";
import useToggle from "./useToggle";

const Toggle = () => {

    // useToggle //
    const [isToggled, toggleValue] = useToggle(false);

    return (
        <div className="section toggle">
            <h2>Power The Sign</h2>
            <div style={{ backgroundColor: "black" }}>
                    <img style={isToggled ? { opacity: 1, backgroundColor: "black" } : { opacity: 0 }} className="img-fluid" alt="" src="https://earthlymission.com/wp-content/uploads/2015/03/Neon-Movie-Posters-in-GIF-15.gif" />
                <div style={{ backgroundColor: "black", paddingBottom: 20 }}>
                    <button style={isToggled ? { color: "yellow" } : { color: "yellow" }} className="btn btn-outline-dark btn-sm" onClick={toggleValue}>{isToggled ? "⚡ON" : "⚡OFF"}</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;