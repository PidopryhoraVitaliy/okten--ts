"use strict";
function addToLocalStorage(arrayName, objToAdd) {
    let array = [];
    const loadedValue = localStorage.getItem(arrayName);
    if (loadedValue) {
        const parsedValue = JSON.parse(loadedValue);
        if (parsedValue && Array.isArray(parsedValue)) {
            array = parsedValue;
        }
    }
    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('testArray', { name: 'Vasia' });
addToLocalStorage('testArray', { name: 'Kolia' });
addToLocalStorage('newArray', { name: 'Kolia' });
