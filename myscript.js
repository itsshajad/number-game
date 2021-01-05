var getInputValue = document.getElementById('number-guess');
var returnResult = document.getElementById('result');
var returnHistory = document.getElementById('history');

window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
  document.getElementById('restart-game').addEventListener('click', resetGame);
};

var randomNumber = Math.floor(Math.random() * 100) + 1;

const resetGame = () => {
  returnResult.innerHTML = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  returnHistory.innerHTML = '';
};

const playGame = () => {
  var createHistoryElement = document.createElement('div');
  createHistoryElement.classList.add('list-group-item');
  createHistoryElement.innerText = 'You guessed ' + getInputValue.value;
  returnHistory.append(createHistoryElement);

  if (getInputValue.value === '') {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Please Enter no</div>';
  } else if (getInputValue.value > 100) {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Please Enter no between 1 to 100</div>';
  } else {
    if (getInputValue.value > randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too high!</div>';
    } else if (getInputValue.value < randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too low!</div>';
    } else {
      returnResult.innerHTML =
        '<div class="alert alert-success">Awesome job, you got it!</div>';
    }
  }
};
