import { useState, useCallback } from "react";

const useMyBoolean = initial => {
    const [value, setValue] = useState(initial);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    const setToggle = useCallback(() => setValue(value => !value), []);

    return [value, setTrue, setFalse, setToggle];
}

export default useMyBoolean;
