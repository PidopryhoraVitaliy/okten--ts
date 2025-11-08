"use strict";
{
    const sum = (array) => {
        let accum = 0;
        for (const item of array) {
            accum += item;
        }
        return accum;
    };
    console.log(sum([1, 2, 10]));
}
