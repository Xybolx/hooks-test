import React from "react";
import DraggableBox from "./draggableBox";
import DroppableBox from "./droppableBox";

const Draggable = () => {

    return (
        <>
            <div className="section text-center">
                <h2>Drag Word To Pic</h2>
                <div>
                    <DraggableBox
                        text="CAR"
                        id="car"
                    />
                </div>
                <div>
                    <DraggableBox
                        text="HOUSE"
                        id="house"
                    />
                </div>
                <div>
                    <DraggableBox
                        text="PLANE"
                        id="plane"
                    />
                </div>
                <DroppableBox
                    id="house"
                />
                <DroppableBox
                    id="plane"
                />
                <DroppableBox
                    id="car"
                />
            </div>
        </>
    );
};

export default Draggable;