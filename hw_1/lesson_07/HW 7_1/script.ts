// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

interface Array<T> {
    myForEach(callback: (value: T) => void): void;

    myFilter(callback: (value: T) => boolean): T[];
}


Array.prototype.myForEach = function <T>(callback: (value: T) => void): void {
    for (const item of this) {
        callback(item);
    }
}

const someArray: number[] = [1, 2, 3, 4, 5];

someArray.myForEach(console.log);


Array.prototype.myFilter = function <T>(conditionCallback: (value: T) => boolean): T[] {
    let result = [];
    for (const item of this) {
        if (conditionCallback(item)) {
            result.push(item);
        }
    }
    return result;
}

const filteredArray: number[] = someArray.myFilter(x => x % 2 === 0);

console.log(filteredArray);
