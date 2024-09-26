const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;
let moves = 0;

// Define the emoji pairs (8 pairs of fruit emojis)
const emojis = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍓', '🍓', '🍉', '🍉', '🍊', '🍊', '🍍', '🍍', '🍑', '🍑'];

// Initialize the game
function initGame() {
    score = 0;
    moves = 0;
    updateScoreboard();
    const shuffledEmojis = shuffleArray([...emojis]); // Shuffle emojis
    cells.forEach((cell, index) => {
        cell.setAttribute('data-emoji', shuffledEmojis[index]);
        cell.textContent = '?'; // Set initial text
        cell.classList.remove('flipped');
        cell.addEventListener('click', flipCard);
    });
}

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Flip card function
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.textContent = this.getAttribute('data-emoji');
    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves += 1; // Increment moves after flipping the second card
    updateScoreboard(); // Update the scoreboard

    checkForMatch();
}

// Check for match function
function checkForMatch() {
    const isMatch = firstCard.getAttribute('data-emoji') === secondCard.getAttribute('data-emoji');

    if (isMatch) {
        score += 1; // Increment score for a match
        disableCards();
        checkGameOver(); // Check if the game is over
    } else {
        unflipCards();
    }
}

// Disable cards function
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

// Unflip cards function
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.textContent = '?';
        secondCard.textContent = '?';
        resetBoard();
    }, 1000); // Wait 1 second before flipping back
}

// Reset board function
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Update scoreboard function
function updateScoreboard() {
    document.getElementById('score').textContent = score;
    document.getElementById('moves').textContent = moves;
}

// Check for game over condition
function checkGameOver() {
    if (score === cells.length / 2) {
        // Game over, update the scoreboard without popup
        document.getElementById('score').textContent = `Game Over! Score: ${score} Moves: ${moves}`;
        resetButton.style.display = 'block'; // Show reset button
    }
}

// Reset button event listener
resetButton.addEventListener('click', () => {
    // resetButton.style.display = 'none'; // Hide reset button
    initGame(); // Reinitialize the game
});

// Start the game
initGame();
