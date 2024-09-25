// script/Guess_the_word.js

const words = ['apple', 'banana', 'cherry', 'grape', 'orange'];
let selectedWord = '';
let guessedLetters = [];
let remainingGuesses = 10;

function initializeGame() {
    selectedWord = getRandomWord();
    guessedLetters = [];
    remainingGuesses = 10;

    // Randomly reveal some letters
    revealRandomLetters();

    updateWordDisplay();
    document.getElementById('remainingGuesses').innerText = remainingGuesses;
    document.getElementById('message').innerText = '';

    // Re-enable the guess button after resetting
    document.getElementById('guessId').disabled = false;
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function revealRandomLetters() {
    const lettersToReveal = Math.floor(selectedWord.length / 3); // Reveal 1/3 of the letters
    const indicesToReveal = new Set();

    while (indicesToReveal.size < lettersToReveal) {
        const randomIndex = Math.floor(Math.random() * selectedWord.length);
        indicesToReveal.add(randomIndex);
    }

    indicesToReveal.forEach(index => {
        guessedLetters.push(selectedWord[index]);
    });
}

function updateWordDisplay() {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.innerHTML = selectedWord.split('').map(letter => {
        return guessedLetters.includes(letter) ? letter : '_';
    }).join(' ');
}

function checkWinCondition() {
    return selectedWord.split('').every(letter => guessedLetters.includes(letter));
}

function handleGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (guess && !guessedLetters.includes(guess)) {
        guessedLetters.push(guess);

        if (!selectedWord.includes(guess)) {
            remainingGuesses--;
            document.getElementById('message').innerText = 'Wrong guess!';
        } else {
            document.getElementById('message').innerText = 'Good guess!';
        }

        if (checkWinCondition()) {
            document.getElementById('message').innerText = 'Congratulations! You guessed the word: ' + selectedWord;
            document.getElementById('guessId').disabled = true; // Disable guessing
            setTimeout(initializeGame, 2000); // Reset after 2 seconds
        } else if (remainingGuesses <= 0) {
            document.getElementById('message').innerText = 'Better luck next time! The word was: ' + selectedWord;
            document.getElementById('guessId').disabled = true; // Disable guessing
            setTimeout(initializeGame, 2000); // Reset after 2 seconds
        }

        updateWordDisplay();
        document.getElementById('remainingGuesses').innerText = remainingGuesses;
    } else if (guessedLetters.includes(guess)) {
        document.getElementById('message').innerText = 'You already guessed that letter!';
    }
}

document.getElementById('guessId').addEventListener('click', handleGuess);
document.getElementById('resetId').addEventListener('click', initializeGame);

// Initialize the game when the page loads
window.onload = initializeGame;
