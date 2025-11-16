"use strict";
const tableElem = document.getElementById('table');
const formElem = document.forms[0];
formElem.onsubmit = function (event) {
    event.preventDefault();
    const rowsCount = +formElem['rows-count'].value;
    const cellsCount = +formElem['cells-count'].value;
    const cellsContent = formElem['cells-content'].value;
    tableElem.innerHTML = '';
    for (let i = 0; i < rowsCount; i++) {
        const tr = document.createElement('tr');
        tableElem.appendChild(tr);
        for (let j = 0; j < cellsCount; j++) {
            const td = document.createElement('td');
            td.innerText = cellsContent;
            tableElem.appendChild(td);
        }
    }
};
