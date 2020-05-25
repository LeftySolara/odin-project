let library;

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
    if (library === undefined || library === null) {
        library = [];
    }
    library.push(book);
}

function render() {
    let libraryDiv = document.querySelector("#library");
    let card;

    if (library === undefined || library === null) {
        library = [];
    }
    library.forEach(book => {
        card = book.createCard();
        libraryDiv.appendChild(card);
    });
}

function openForm() {
    document.querySelector("#addBookForm").style.display = "block";
}

function closeForm() {
    document.querySelector("#addBookForm").style.display = "none";
}

function addBookFromForm() {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    let readText;
    if (read.checked) {
        readText = "Read: Yes";
    }
    else {
        readText = "Read: No";
    }

    let book = new Book(title.value, author.value, pages.value, readText);
    addBookToLibrary(book);

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

    render();
}

let addBookForm = document.querySelector("#addBookForm");
addBookForm.addEventListener("submit", addBookFromForm);
render();
