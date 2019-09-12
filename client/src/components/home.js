import React from "react";
// import SpeechRecognition from "./speechRecognition";
import Choose from "./choose";
import Toggle from "./toggle";
import Countdown from "./countdown";
import Counter from "./counter";
import NumberArray from "./numberArray";
import UserArray from "./userArray";
import Draggable from "./draggable";

const Home = () => {

    return (
        <div className="col-md-6 offset-md-3 home-container">
            <h2>React<img className="img-fluid header-img" alt="" src="logo192.png" />Hooks</h2>
            {/* <SpeechRecognition /> */}
            <UserArray />
            <NumberArray />
            <Counter />
            <Countdown />
            <Choose />
            <Toggle />
            <Draggable />
        </div>
    );
}

export default Home;