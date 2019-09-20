import { useCallback, useState } from "react";

const useCountdown = initial => {
    const [value, setValue] = useState(initial);

    const decrement = useCallback(() => setValue(value => value - 1), []);
    const clear = useCallback(() => setValue(initial), [initial]);

    return [value, decrement, clear];
}

export default useCountdown;