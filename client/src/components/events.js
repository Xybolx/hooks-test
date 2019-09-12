import useWindowEvent from './useWindowEvent';

export default {
    useKeyUp: function (cb) {
        return useWindowEvent("keyup", cb);
    },

    useKeyDown: function (cb) {
        return useWindowEvent("keydown", cb);
    },

    useMouseMove: function (cb) {
        return useWindowEvent("mousemove", cb);
    },

    useWheel: function (cb) {
        return useWindowEvent("onwheel", cb);
    },

    useScroll: function (cb) {
        return useWindowEvent("scroll", cb);
    }
}