"use strict";
// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
const currentTimestamp = new Date().getTime();
let price = +(localStorage.getItem('price') || 0);
let timestamp = +(localStorage.getItem('timestamp') || 0);
if (price === 0 || timestamp === 0) {
    price = 100;
    localStorage.setItem('price', price.toString());
}
else {
    if (currentTimestamp - timestamp > 10000) {
        price += 10;
        localStorage.setItem('price', price.toString());
    }
}
localStorage.setItem('timestamp', currentTimestamp.toString());
const priceDiv = document.getElementById('price');
priceDiv.innerText = price + 'грн';
