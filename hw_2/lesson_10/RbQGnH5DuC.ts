function addToLocalStorage<T>(arrayName: string, objToAdd: T): void {
    let array: T[] = [];

    const loadedValue: string | null = localStorage.getItem(arrayName);
    if (loadedValue) {
        const parsedValue: any = JSON.parse(loadedValue);
        if (parsedValue && Array.isArray(parsedValue)) {
            array = parsedValue as T[];
        }
    }

    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('testArray', {name: 'Vasia'});
addToLocalStorage('testArray', {name: 'Kolia'});
addToLocalStorage('newArray', {name: 'Kolia'});
