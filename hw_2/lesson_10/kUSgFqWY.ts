const tableElem = document.getElementById('table') as HTMLTableElement;
const formElem = document.forms[0] as HTMLFormElement;

formElem.onsubmit = function (event: SubmitEvent) {
    event.preventDefault();
    const rowsCount: number = +(formElem['rows-count'] as HTMLInputElement).value;
    const cellsCount: number = +(formElem['cells-count'] as HTMLInputElement).value;
    const cellsContent: string = (formElem['cells-content'] as HTMLInputElement).value;

    tableElem.innerHTML = '';
    for (let i = 0; i < rowsCount; i++) {
        const tr: HTMLTableRowElement = document.createElement('tr');
        tableElem.appendChild(tr);
        for (let j = 0; j < cellsCount; j++) {
            const td: HTMLTableCellElement = document.createElement('td');
            td.innerText = cellsContent;
            tableElem.appendChild(td);
        }
    }
}
