let canv = document.getElementById("canv");
let ctx = canv.getContext("2d");
let red = 0;
let green = 0;
let blue = 0;
let count = 0;

canv.width = window.innerWidth;
canv.height = window.innerHeight;

//-------------------START-------------------

start(22);

//-------------------FUNCS-------------------
function printDot(x1, y1, x2, y2) {
    // ctx.moveTo(x1,y1);
    // ctx.lineTo(x2, y2);
    // ctx.stroke();

    ctx.fillRect(x1, y1, 1, 1);
    ctx.fillRect(x2, y2, 1, 1);
}

function start(deep) {
    dragonF(1200, 700, 500, 500, deep);
    alert (count);
}

function dragonF(x1, y1, x2, y2, deep) {
    count++;
    if (deep > 0) {
        let xn = (x2 - x1) / 2;
        let yn = (y2 - y1) / 2;
        let xTmp = x1 + xn - yn;
        let yTmp = y1 + xn + yn;

        dragonF(x1, y1, xTmp, yTmp, deep - 1);
        dragonF(x2, y2, xTmp, yTmp, deep - 1);

    } else {
        colorPlus();
        printDot(x1, y1, x2, y2);
    }   
}

function colorRand() {
    red = Math.floor(Math.random() * (101));
    green = Math.floor(Math.random() * (101));
    blue = Math.floor(Math.random() * (101));
    ctx.fillStyle = "#" + red + green + blue;
}

function colorPlus() {
    red = Math.floor(Math.random() * (101));
    green = Math.floor(Math.random() * (101));
    blue = Math.floor(Math.random() * (101));
    ctx.fillStyle = "#" + red + green + blue;
}