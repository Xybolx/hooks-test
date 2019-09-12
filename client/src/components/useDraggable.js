import { useState, useEffect } from "react";

const useDraggable = el => {
    const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });
    useEffect(() => {
        const handleMouseDown = ev => {
            const startX = ev.pageX - dx;
            const startY = ev.pageY - dy;
            const handleMouseMove = ev => {
                const newDx = ev.pageX - startX;
                const newDy = ev.pageY - startY;
                setOffset({ dx: newDx, dy: newDy });
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener(
                "mouseup",
                () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                },
                { once: true }
            );
        };
        el.current.addEventListener("mousedown", handleMouseDown);
        const cleanUp = () => {
            el.current.removeEventListener("mousedown", handleMouseDown);
        }
        return () => {
            cleanUp();
        };
    }, [dx, dy, el]);

    useEffect(() => {
        el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }, [dx, dy, el]);
};

export default useDraggable;
