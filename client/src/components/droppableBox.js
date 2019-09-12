import React, { useRef } from "react";

const DroppableBox = ({ id }) => {

    const el = useRef();
    const el2 = useRef();
    const el3 = useRef();

    const onDragEnter = () => {
        console.log("dragEnter");
    };

    const onDragLeave = () => {
        console.log("dragLeave");
    };

    const onDragOver = ev => {
        ev.preventDefault();
    };

    const onDrop = ev => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData('id');
        if (id === el.current.id) {
            console.log("match");
            el2.current.style.opacity = 1;
            el3.current.style.opacity = 0;
        }
        if (id !== el.current.id) {
            el2.current.style.opacity = 0;
            el3.current.style.opacity = 1;
        }
        console.log(id + " dropped");
    };

    return (
        <>
        <div
            id={id}
            ref={el}
            className={`${id} droppable`}
            name={id}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={ev => onDragOver(ev)}
            onDrop={ev => onDrop(ev)}
        >
        </div>
        <h5 className="droppable-header" ref={el2}>Correct!</h5>
        <h5 className="droppable-header" ref={el3}>Wrong!</h5>
        </>
    );
};

export default DroppableBox;