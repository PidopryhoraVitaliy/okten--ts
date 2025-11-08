"use strict";
{
    function addUl(liText) {
        document.write(`
            <ul>
                <li>${liText}</li>
                <li>${liText}</li>
                <li>${liText}</li>
            </ul>
        `);
    }
    addUl('Hello World');
    addUl('li element');
}
