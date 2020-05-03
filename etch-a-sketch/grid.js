function createGrid(size) {
    if (size <= 0) {
        return;
    }

    let grid = document.querySelector("#grid");
    const flexBasis = (size**(-1)) * 100;
    const flexBasisStr = "calc(" + flexBasis + "%)";

    grid.innerHTML = "";
    for (let i = 0; i < size**2; ++i) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = flexBasisStr;

        square.addEventListener("mouseenter", function (event) {
            this.style.backgroundColor = "gray";
        });

        /* Invisible content to help mmaintain aspect ratio */
        let content = document.createElement("div");
        content.classList.add("content");
        square.appendChild(content);

        grid.appendChild(square);
    }
}

function clearGrid() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(function(square) {
        square.style.backgroundColor = "white";
    })
}

function changeGridSize() {
    const newSize = parseInt(prompt("Enter new grid size", 16), 10);

    if (!Number.isInteger(newSize) || newSize <= 0) {
        alert("Invalid size entered.");
        return;
    }
    createGrid(newSize);
}

function setup() {
    createGrid(16);

    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", clearGrid);

    let changeSizeButton = document.querySelector("#grid-size");
    changeSizeButton.addEventListener("click", changeGridSize);
}

setup();
