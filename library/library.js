let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
}

function addBookToLibrary(book) {
    library.push(book);
}

// Sample data
let book = new Book("The Pragmatic Programmer", "David Thomas", 300, true);
let book2 = new Book("The Saga of Tanya the Evil, Vol. 1: Deus lo Vult", "Carlo Zen", 315, false);

addBookToLibrary(book);
addBookToLibrary(book2);

console.log(library);
