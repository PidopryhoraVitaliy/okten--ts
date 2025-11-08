"use strict";
{
    const addUl = (liText, liCount) => {
        let ul = `<ul>`;
        for (let i = 0; i < liCount; i++) {
            ul += `<li>${liText}</li>`;
        }
        ul += `</ul>`;
        document.write(ul);
    };
    addUl('Hello World', 2);
    addUl('li element', 5);
}
