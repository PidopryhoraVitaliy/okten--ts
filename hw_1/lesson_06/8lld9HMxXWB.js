"use strict";
{
    const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
    const upperCaseStrings = [];
    for (const item of strings) {
        // console.log(item.toUpperCase());
        upperCaseStrings.push(item.toUpperCase());
    }
    console.log(upperCaseStrings);
}
