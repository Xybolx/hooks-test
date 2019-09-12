import React, { useEffect } from "react";
import useCounter from "./useCounter";

const Countdown = () => {

    // useCounter as a countdown
    const [countdown, incrementCount, decrementCount, resetCountdown] = useCounter(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            decrementCount();
        }, 1000)
        return () => clearInterval(countdownInterval)
    }, [countdown, decrementCount])

    useEffect(() => {
        if (countdown === -1) {
            resetCountdown();
        }
    }, [countdown, resetCountdown])

    return (
        <div className="section countdown">
            <h2 className="countdown-header">Countdown</h2>
            <div className="space">
            <div style={{ color: "yellow", paddingTop: 20 }}>Countdown: <span>{countdown === 0 ? "\"ALL CLEAR KID!\"" : countdown}</span></div>
                <div style={{ color: "yellow" }}>The Death Star is: <span>{countdown === 0 ? "DESTROYED" : "OPERATING"}</span></div>
                <span><img className="img-fluid" alt="" src={countdown === 0 ? "https://media.giphy.com/media/MLUb2IRXoTUHe/giphy.gif" : "http://iconbug.com/data/b5/256/67561e3e378f8513c81b977aa9d662b6.png"} /></span>
            </div>
        </div>
    );
};

export default Countdown;