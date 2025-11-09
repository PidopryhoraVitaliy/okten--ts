"use strict";
{
    function cloner(obj) {
        if (obj) {
            const functions = [];
            for (const key in obj) {
                if (typeof obj[key] === 'function') {
                    const functionClone = obj[key].bind({});
                    functions.push({ functionClone, key });
                }
            }
            const cloneObj = JSON.parse(JSON.stringify(obj));
            for (const func of functions) {
                cloneObj[func.key] = func.functionClone;
            }
            // console.log(cloneObj);
            return cloneObj;
        }
        throw new Error(`Could not clone ${obj}`);
    }
    const person = {
        name: 'Vasia',
        surname: 'Pupkin',
        wife: {
            name: 'Nastia',
            surname: 'Pupkin',
        },
        children: [
            { name: 'Valeri' },
            { name: 'Semen' },
        ],
        walk: function () {
            console.log(`${this.name} is going!`);
        },
        greet() {
            console.log(`greet ${this.name}!`);
        },
        test: null,
        age: NaN,
    };
    console.log('person', person);
    person.walk();
    // console.log('--------------------------', 'recursive copy');
    // const copy = copyObject(person);
    // console.log('copy', copy);
    // copy.walk();
    // copy.name = 'Test';
    // copy.walk();
    // copy.greet();
    console.log('--------------------------', 'hw_resolves - cloner');
    const clone = cloner(person);
    console.log('clone', clone);
    clone.walk();
    clone.name = 'Test';
    clone.walk();
}
