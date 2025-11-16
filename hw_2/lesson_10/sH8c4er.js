"use strict";
const div = document.createElement('div');
div.id = 'text';
div.innerText = 'Hello World!';
const btn = document.createElement('button');
btn.innerText = 'delete div!';
btn.addEventListener('click', function () {
    div.remove();
    this.disabled = true;
});
document.body.append(div, btn);
