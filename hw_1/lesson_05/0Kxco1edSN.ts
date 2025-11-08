{
    const addUl = (liText: string, liCount: number): void => {
        let ul: string = `<ul>`;
        for (let i = 0; i < liCount; i++) {
            ul += `<li>${liText}</li>`;
        }
        ul += `</ul>`;
        document.write(ul);
    }
    addUl('Hello World', 2);
    addUl('li element', 5);
}