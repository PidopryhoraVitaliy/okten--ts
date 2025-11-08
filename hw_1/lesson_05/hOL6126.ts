{
    const addUl = (liText: string): void => {
        document.write(`
            <ul>
                <li>${liText}</li>
                <li>${liText}</li>
                <li>${liText}</li>
            </ul>
        `);
    }
    addUl('Hello World');
    addUl('li element');
}