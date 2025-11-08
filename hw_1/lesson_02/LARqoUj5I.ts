{
    type BookType = {
        title: string
        pageCount: number,
        genre: string,
    }

    const book1: BookType = {
        title: "Book 1",
        pageCount: 342,
        genre: "fiction",
    }
    const book2: BookType = {
        title: "Book 2",
        pageCount: 257,
        genre: "fiction",
    }
    const book3: BookType = {
        title: "Book 3",
        pageCount: 342,
        genre: "non-fiction",
    }
    console.log(book1);
    console.log(book2);
    console.log(book3);
}