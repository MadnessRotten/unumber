const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const checkGuess = () => {
  const guessInput = document.getElementById('guess-input');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Введите число от 1 до 100');
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    alert(`Поздравляю, вы угадали число за ${attempts} попыток!`);
  } else if (guess < secretNumber) {
    alert('Загаданное число больше');
  } else {
    alert('Загаданное число меньше');
  }
};

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', checkGuess);
