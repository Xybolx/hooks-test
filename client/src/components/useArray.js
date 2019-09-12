import { useCallback, useState } from "react";

const useArray = initial => {
    const [value, setValue] = useState(initial);

    const addValue = useCallback(a => setValue(value => [...value, a]), []);
    
    const removeIndex = useCallback(item => setValue(v => {
        v.splice(v.indexOf(item), 1);
        return v;
    }), []);

    const removeById = useCallback(id => setValue(arr => arr.filter(v => v && v.id !== id)), []);

    const clear = useCallback(() => setValue(() => []), [])
    
    return [value, addValue, removeById, clear] 
}

export default useArray;