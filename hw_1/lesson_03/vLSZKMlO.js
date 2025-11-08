"use strict";
{
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    // let listOfItems: Array<string> = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    let list = '<ul><li>ITEM OF ARRAY</li>';
    for (const item of listOfItems) {
        list += `<li>${item}</li>`;
    }
    list += '</ul>';
    console.log(list);
    document.write(list);
}
