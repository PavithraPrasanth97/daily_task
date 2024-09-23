const messageElement = document.getElementById('message');
const topMessageElement = document.getElementById('topMessage');
const cells = document.querySelectorAll('.cell');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

function handleCellClick(index) {
    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    cellUpdate();
    checkResult();

    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        topMessageElement.innerText = `Player ${currentPlayer}'s turn`;
    }
}

function cellUpdate() {
    board.forEach((value, index) => {
        cells[index].innerText = value;

        // Add class based on the current player
        if (value === 'X') {
            cells[index].classList.add('xfilled');
            cells[index].classList.remove('ofilled');
        } else if (value === 'O') {
            cells[index].classList.add('ofilled');
            cells[index].classList.remove('xfilled');
        }
    });
}

function checkResult() {
    let roundWon = false;
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] === '' || board[b] === '' || board[c] === '') continue;
        if (board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        messageElement.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        messageElement.innerText = 'Draw';
        gameActive = false;
        topMessageElement.innerText = '';
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    messageElement.innerText = '';
    topMessageElement.innerText = `Player ${currentPlayer}'s turn`;
    cellUpdate();

    // Reset cell classes and content
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('ofilled', 'xfilled');
    });
}
