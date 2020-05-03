function clearGrid() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(function(square) {
        square.style.backgroundColor = "white";
    })
}

function setup() {
    let grid = document.querySelector("#grid");
    for (let i = 0; i < 256; ++i) {
        let square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseenter", function (event) {
            this.style.backgroundColor = "gray";
        });

        let content = document.createElement("div");
        content.classList.add("content");
        square.appendChild(content);

        grid.appendChild(square);
    }

    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", clearGrid);
}

setup();
