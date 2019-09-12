import { useEffect, useState } from 'react';
import events from './events';

const useIdleTimer = () => {

    const [idleTimer, setIdleTimer] = useState(100);

    useEffect(() => {
        const idleInterval = setInterval(() => {
            setIdleTimer(idleTimer - 1)
        }, 1000);
        return () => clearInterval(idleInterval);
    }, [idleTimer]);
}

export default useIdleTimer;