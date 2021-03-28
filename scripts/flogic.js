import print from "print.js";

function start(deep, color) {
    dragonF(0, 0, 20, 20, 25, "#fff");
}

function dragonF(x1, y1, x2, y2, deep, color) {
    if (deep > 0) {
        xn = (x1 + x2) % 2 + (y2 - y1) % 2;
        yn = (y1 + y2) % 2 - (x2 - x1) % 2;
        dragonF(x1, y1, xn, yn, k - 1, color);
        dragonF(x2, y2, xn, yn, k - 1, color);
    } else {
        print.printLine(x1, y1, x2, y2, color);
    }
}