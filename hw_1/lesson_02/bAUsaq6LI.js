"use strict";
{
    let str = prompt("Enter a number");
    if (str) {
        let x = +str;
        if (x !== 0) {
            console.log('Вірно');
        }
        else {
            console.log('Невірно');
        }
    }
}
