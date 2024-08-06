document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const resultMessage = document.getElementById('result-message');
    const attemptsMessage = document.getElementById('attempts-message');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);
        attempts++;

        // userGues 와 randomNumber를 비교 해보세요
        // 같을 때 
            // 주석을 해제하여 아래 코드를 이용해보세요.
            // resultMessage.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            // resultMessage.style.color = 'green';
            // resetGame();
        // 클 때
            // 주석을 해제하여 아래 코드를 이용해보세요.
            //resultMessage.textContent = 'Too high! Try again.';
            //resultMessage.style.color = 'red';
        } 
        // 작을 때
            // 주석을 해제하여 아래 코드를 이용해보세요.
            //resultMessage.textContent = 'Too low! Try again.';
            //resultMessage.style.color = 'red';

        attemptsMessage.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    });

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        attemptsMessage.textContent = '';
        setTimeout(() => {
            resultMessage.textContent = '';
        }, 5000);
    }
});
