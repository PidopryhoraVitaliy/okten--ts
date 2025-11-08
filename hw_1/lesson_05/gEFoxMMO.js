"use strict";
{
    const addUl = (array) => {
        let ul = `<ul>`;
        for (const item of array) {
            ul += `<li>${item}</li>`;
        }
        ul += `</ul>`;
        document.write(ul);
    };
    addUl([1, 2, 3, 4, 5, 'test']);
    addUl([true, false, undefined, null, NaN, 'test', 10]);
}
