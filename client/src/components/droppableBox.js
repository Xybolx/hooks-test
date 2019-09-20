import React, { useRef } from "react";

const DroppableBox = ({ id, setIsCorrect }) => {

    const el = useRef();

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
            setIsCorrect(true);
            console.log("match");
            el.current.style.backgroundColor = "green";            
        }
        if (id !== el.current.id) {
            setIsCorrect(false);
            el.current.style.backgroundColor = "red";
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
        </>
    );
};

export default DroppableBox;