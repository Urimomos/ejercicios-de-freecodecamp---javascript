const books = [
    {
        title : "Principia Mathematica",
        authorName : "Bertrand Russell",
        releaseYear : 1910
    },
    {
        title : "República",
        authorName : "Platón",
        releaseYear : 1942
    },
    {
        title : "Así habló Zaratustra",
        authorName : "Friedrich Nietzsche",
        releaseYear : 2000 
    }
];

function sortByYear(book1, book2){
    if(book1.releaseYear < book2.releaseYear){
        return -1;
    }
    if(book1.releaseYear > book2.releaseYear){
        return 1;
    }
    return 0;
}



const filteredBooks = books.filter(
    (objeto) => objeto.releaseYear <= 1950
);

filteredBooks.sort(sortByYear);
console.log(filteredBooks);
