import { useEffect } from 'react';

 const useWindowEvent = (ev, cb) => {
    useEffect(() => {
        window.addEventListener(ev, cb);
        return () => window.removeEventListener(ev, cb);
    }, [ev, cb]);
}

export default useWindowEvent;
