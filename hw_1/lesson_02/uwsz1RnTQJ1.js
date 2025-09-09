"use strict";
const strX = prompt("Enter first number");
const srtY = prompt("Enter second number");
if ((strX) && (srtY)) {
    const x = +strX;
    const y = +srtY;
    if (x === y) {
        console.log('equals number');
    }
    else if (x > y) {
        console.log(x);
    }
    else {
        console.log(y);
    }
}
