"use strict";
const ageInput = document.getElementById('age');
document.getElementById('check-btn')?.addEventListener('click', function () {
    const age = +ageInput.value;
    if (age < 18) {
        alert('you are younger than 18!');
    }
});
