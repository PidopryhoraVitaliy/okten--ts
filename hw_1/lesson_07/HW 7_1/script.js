// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item);
    }
}

const someArray = [1, 2, 3, 4, 5];

someArray.myForEach(console.log);


Array.prototype.myFilter = function (conditionCallback) {
    let result = [];
    for (const item of this) {
        if (conditionCallback(item)) {
            result.push(item);
        }
    }
    return result;
}

const filteredArray = someArray.myFilter(x => x % 2 === 0);

console.log(filteredArray);