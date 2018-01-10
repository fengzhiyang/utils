export class Scroll {
    constructor() {
    }

    public getScrollTop() {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    }

    public offset(ele) {
        let pos = {
            left: 0,
            top: 0
        };
        while (ele) {
            pos.left += ele.offsetLeft;
            pos.top += ele.offsetTop;
            ele = ele.offsetParent;
        }
        return pos
    }
}