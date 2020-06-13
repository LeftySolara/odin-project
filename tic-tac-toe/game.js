const player = (playerID, playerName, playerTile) => {

    let id = playerID;
    let name = playerName;
    let tile = playerTile;
    let score = 0;
    let marks = {
        row: [0, 0, 0],
        column: [0, 0, 0],
        diag: 0,
        antidiag: 0,
    }

    return {id, name, tile, score, marks};
};

const gameBoard = (function() {
    "use strict"

    let _board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let _currentSymbol;

    function setSymbol(symbol) {
        _currentSymbol = symbol;
    }

    function checkForWin(row, column, marks) {
        let boardSize = _board[0].length;
        marks.row[row]++;
        marks.column[column]++;
        if (row === column) {
            marks.diag++;
        }
        if (row + column === boardSize -1) {
            marks.antidiag++;
        }

        if (marks.row[row] === boardSize
            || marks.column[column] === boardSize
            || marks.diag === boardSize
            || marks.antidiag === boardSize)
            return true;

        return false;
    }

    function markBoard(row, column) {
        let square = _board[row][column];
        if (square.innerHTML === "") {
            square.innerHTML = _currentSymbol;
        }
    }

    function initialize(turnFunc) {
        let squares = Array.from(document.querySelectorAll(".boardSquare"));
        for (let row = 0; row < _board.length; ++row) {
            for (let col = 0; col < _board[0].length; ++col) {
                let square = squares.shift();
                square.addEventListener("click", function() {
                    turnFunc(row, col);
                });
                _board[row][col] = square;
            }
        }
    }

    return {setSymbol, checkForWin, markBoard, initialize};
})();

const game = (function() {
    "use strict"

    let _player1;
    let _player2;
    let _currentPlayer;

    const _winEvent = new CustomEvent("playerWin", {
        bubbles: true,
        detail: {
            id: () => _currentPlayer.id,
            name: () => _currentPlayer.name,
            score: () => _currentPlayer.score
        }
    });

    function _switchPlayer() {
        if (_currentPlayer === _player1) {
            _currentPlayer = _player2;
        }
        else {
            _currentPlayer = _player1;
        }
        gameBoard.setSymbol(_currentPlayer.tile);
    }

    function performTurn(row, column) {
        gameBoard.markBoard(row, column);
        if (gameBoard.checkForWin(row, column, _currentPlayer.marks)) {
            _currentPlayer.score++;
            let boardDisplay = document.querySelector("#board");
            boardDisplay.dispatchEvent(_winEvent);
        }
        _switchPlayer();
    }

    function setPlayer1Name(name) {
        _player1.name = name;
    }

    function setPlayer2Name(name) {
        _player2.name = name;
    }

    function initialize() {
        _player1 = player(1, "Player 1", "X");
        _player2 = player(2, "Player 2", "O");
        _currentPlayer = _player1;

        gameBoard.initialize(performTurn);
        gameBoard.setSymbol(_currentPlayer.tile);
    }

    return {initialize, setPlayer1Name, setPlayer2Name};
})();

let displayController = (function() {

    function _setPlayerName(number, name) {
        let id = "#player" + number + "Name";
        let nameDisplay = document.querySelector(id);
        nameDisplay.innerHTML = name;
    }

    function _setPlayerScore(playerID, score) {
        let elemID = "#player" + playerID + "Score";
        let scoreDisplay = document.querySelector(elemID);
        scoreDisplay.innerHTML = "Score: " + score;
    }

    function _initializeButtons() {
        let nameButtons = document.querySelectorAll(".setNameBtn");
        for (let i = 0; i < nameButtons.length; ++i) {
            nameButtons[i].addEventListener("click", function() {
                let promptText = "Enter name for player " + (i+1) + ":";
                let name = prompt(promptText);

                if (name === null || name === "") {
                    return;
                }

                _setPlayerName(i+1, name);

                if (i === 0) {
                    game.setPlayer1Name(name);
                }
                else {
                    game.setPlayer2Name(name);
                }
            });
        }
    }

    function _initializeEvents() {
        let boardDisplay = document.querySelector("#board");
        boardDisplay.addEventListener("playerWin", function(event) {
            alert(`${event.detail.name()} wins!`);
            _setPlayerScore(event.detail.id(), event.detail.score());
        } );
    }

    function initialize() {
        _initializeButtons();
        _initializeEvents();
    }

    return {initialize};
})();

game.initialize();
displayController.initialize();

