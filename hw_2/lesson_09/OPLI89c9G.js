"use strict";
{
    const items = ['Main', 'Products', 'About us', 'Contacts'];
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}
