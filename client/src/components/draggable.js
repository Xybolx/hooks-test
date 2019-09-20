import React, { useState } from "react";
import DraggableBox from "./draggableBox";
import DroppableBox from "./droppableBox";

const Draggable = () => {

    const [isCorrect, setIsCorrect] = useState(false);

    return (
        <>
            <div className="section text-center">
                <h2>Drag Word To Pic</h2>
                <div>
                    <DraggableBox
                        text="CAR"
                        id="car"
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                    />
                </div>
                <div>
                    <DraggableBox
                        text="HOUSE"
                        id="house"
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                    />
                </div>
                <div>
                    <DraggableBox
                        text="PLANE"
                        id="plane"
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                    />
                </div>
                <DroppableBox
                    id="house"
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                />
                <DroppableBox
                    id="plane"
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                />
                <DroppableBox
                    id="car"
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                />
            </div>
        </>
    );
};

export default Draggable;