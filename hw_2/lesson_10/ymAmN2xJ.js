"use strict";
{
    const form = document.forms[0];
    form.onsubmit = function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const surnameInput = document.getElementById('surname');
        const ageInput = document.getElementById('age');
        const user = {
            name: nameInput.value,
            surname: surnameInput.value,
            age: +ageInput.value,
        };
        const div = document.createElement('div');
        div.innerText = `name: ${user.name} surname: ${user.surname} ${user.age} years old`;
        document.body.appendChild(div);
    };
}
