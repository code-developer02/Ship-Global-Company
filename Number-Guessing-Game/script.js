// script.js
document.addEventListener("DOMContentLoaded", () => {
    let randomNumber = generateRandomNumber(1, 100);
    let attempts = 0;

    const guessInput = document.getElementById("guess-input");
    const submitGuess = document.getElementById("submit-guess");
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");
    const restartGame = document.getElementById("restart-game");

    submitGuess.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = "Please enter a valid number between 1 and 100.";
            feedback.style.color = "red";
        } else {
            attempts++;
            attemptsDisplay.textContent = `Attempts: ${attempts}`;

            if (userGuess < randomNumber) {
                feedback.textContent = "Too low! Try again.";
                feedback.style.color = "orange";
            } else if (userGuess > randomNumber) {
                feedback.textContent = "Too high! Try again.";
                feedback.style.color = "orange";
            } else {
                feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
                feedback.style.color = "green";
            }
        }

        guessInput.value = "";
    });

    restartGame.addEventListener("click", () => {
        randomNumber = generateRandomNumber(1, 100);
        attempts = 0;
        attemptsDisplay.textContent = "Attempts: 0";
        feedback.textContent = "";
        guessInput.value = "";
    });

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
