{
    type UserType = {
        id: number,
        name: string,
        age: number
    };

    function addToDocument(array: UserType[]): void {
        for (const item of array) {
            document.write(`
                <div>
                    id:${item.id} name:${item.name} age:${item.age}
                </div>`);
        }
    }

    addToDocument([
        {id: 1, name: 'vasia', age: 37},
        {id: 2, name: 'petro', age: 27},
        {id: 3, name: 'lena', age: 21}]
    );
}