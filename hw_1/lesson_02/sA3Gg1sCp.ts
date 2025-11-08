{
    type AuthorType = {
        name: string,
        age: number
    }

    type BookType = {
        title: string,
        pageCount: number,
        genre: string,
        authors: AuthorType []
    }
    {
        const book1: BookType = {
            title: "Book 1",
            pageCount: 342,
            genre: "fiction",
            authors: [
                {name: "John", age: 28},
                {name: "Jane", age: 32}
            ]
        }
        const book2: BookType = {
            title: "Book 2",
            pageCount: 257,
            genre: "fiction",
            authors: [
                {name: "Bill", age: 75}
            ]
        }
        const book3: BookType = {
            title: "Book 3",
            pageCount: 342,
            genre: "non-fiction",
            authors: [
                {name: "Karen", age: 44}
            ]
        }
        console.log(book1);
        console.log(book2);
        console.log(book3);
    }
}