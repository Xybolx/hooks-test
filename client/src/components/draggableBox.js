import React, { useRef } from "react";
import useDraggable from "./useDraggable";

const DraggableBox = ({ text, id, spanId, isCorrect, setIsCorrect }) => {

    const el = useRef();
    useDraggable(el);

    const onDragStart = (ev, id) => {
        console.log('dragStart: ' + id);
        ev.dataTransfer.setData("id", id);
    };

    const onDragEnd = ev => {
        el.current.ref = null;
    }

    const boxStyle = {
        height: "100%",
        width: "100%",
        marginTop: "5px"
    }

    return (
        <div
            id={`${id}-text`}
            className={`${id}`}
            name={id}
            style={boxStyle}
            ref={el}
            draggable
            onDragStart={ev => onDragStart(ev, id)}
            onDragEnd={ev => onDragEnd(ev)}
        >
            <span id={spanId} className="span-text">{text}</span>
        </div>
    );
};

export default DraggableBox;