let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
}

Book.prototype.createCard = function() {
    let card = document.createElement("div");
    card.classList.add("bookCard");

    let cardLine;
    let bookInfo = this.info().split(",");
    bookInfo.forEach(line => {
        cardLine = document.createElement("p");
        cardLine.innerHTML = line.trim();
        card.appendChild(cardLine);
    });

    return card;
}

function addBookToLibrary(book) {
    library.push(book);
}

function render() {
    let libraryDiv = document.querySelector("#library");
    let card;

    library.forEach(book => {
        card = book.createCard();
        libraryDiv.appendChild(card);
    });
}

// Sample data
let book = new Book("The Pragmatic Programmer", "David Thomas", 300, "Yes");
let book2 = new Book("The Saga of Tanya the Evil, Vol. 1: Deus lo Vult", "Carlo Zen", 315, "No");

addBookToLibrary(book);
addBookToLibrary(book2);

render();
