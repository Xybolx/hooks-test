import React, { useState, useContext } from "react";
import { socket } from "./sockets";
import UserContext from "../components/user_context/context";
import useSpeechRecognition from "./useSpeechRecognition";

const SpeechRecognition = ({ addItem, clearArray }) => {

    const { user, setUser } = useContext(UserContext);

    const [value, setValue] = useState('');

    const onEnd = () => {
        console.log("end");
    };
    
    
    const onResult = result => {
        setValue(result);
        if (result === "clear numbers") {
            clearArray();
        }
    };
    
    const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd });
    
    const toggle = listening
    ? stop
    : () => listen();

    const handleSubmit = ev => {
        ev.preventDefault();
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit} id="speech-recognition-form">
                <h2>Speech Recognition</h2>
                {!supported && (
                    <p>Oh no, it looks like your browser doesn&#39;t support Speech Recognition.</p>
                )}
                {supported && (
                    <>
                        <p>
                            {`Click 'Listen' and start speaking.
               SpeechRecognition will provide a transcript of what you are saying.`
                            }
                        </p>
                        <textarea
                            id="transcript"
                            name="transcript"
                            placeholder="Waiting for you to spaeak..."
                            value={value}
                            rows={3}
                        />
                        <div>
                            <button type="button" className="btn btn-link btn-md" onClick={toggle}>{listening ? 'Stop' : 'Listen'}</button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default SpeechRecognition;