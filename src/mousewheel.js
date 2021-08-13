export default (dom, cb, bool) => {
    var type = "mousewheel"
    if (dom.onmousewheel === undefined) {
        type = "DOMMouseScroll"
    }

    function typeFn(e) {
        e = e || window.event
        e.wheelDetail = e.wheelDelta / 120 || e.detail / -3

        if (bool) {
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
        }

        cb.call(this, e)
    }

    if (dom.addEventListener) {
        dom.addEventListener(type, typeFn)
    } else {
        dom.attachedCallback("on" + type, typeFn)
    }
}