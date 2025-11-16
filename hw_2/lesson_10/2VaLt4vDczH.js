"use strict";
{
    const restoredValue = localStorage.getItem('number');
    let num = 0;
    if (typeof restoredValue === 'string') {
        num = +restoredValue;
    }
    num += 1;
    const numDiv = document.getElementById('num');
    numDiv.innerText = num.toString();
    localStorage.setItem('number', num.toString());
}
