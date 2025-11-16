"use strict";
{
    const KG_TO_POUND_COEFFICIENT = 2.20462;
    const kgInputElem = document.getElementById('kg');
    const poundsDivElem = document.getElementById('pounds');
    kgInputElem.addEventListener('input', function (event) {
        const weightKg = +event.target.value;
        const weightPounds = weightKg * KG_TO_POUND_COEFFICIENT;
        poundsDivElem.innerText = 'pounds: ' + weightPounds;
    });
}
