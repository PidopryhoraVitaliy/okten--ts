{
    // let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    let listOfItems: Array<string> = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    let list: string = '<ul><li>ITEM OF ARRAY</li>';
    for (const item of listOfItems) {
        list += `<li>${item}</li>`;
    }
    list += '</ul>';
    console.log(list)
    document.write(list);
}