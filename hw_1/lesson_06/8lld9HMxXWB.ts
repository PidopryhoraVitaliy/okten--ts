{
    const strings: string[] = ['hello world', 'lorem ipsum', 'javascript is cool'];
    const upperCaseStrings: string[] = [];
    for (const item of strings) {
        // console.log(item.toUpperCase());
        upperCaseStrings.push(item.toUpperCase());
    }
    console.log(upperCaseStrings);
}