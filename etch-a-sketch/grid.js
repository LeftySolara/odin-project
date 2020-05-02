function createGrid() {
    let grid = document.querySelector("#grid");
    for (let i = 0; i < 256; ++i) {
        let square = document.createElement("div");
        square.classList.add("square");

        let content = document.createElement("div");
        content.classList.add("content");
        square.appendChild(content);

        grid.appendChild(square);
    }
}

createGrid();
