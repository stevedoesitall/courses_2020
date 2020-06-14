const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`Select ${ROCK}, ${PAPER}, or ${SCISSORS}:`, '').toLowerCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
        return;
    }
    return selection;
};

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = function(cChoice, pChoice = DEFAULT_USER_CHOICE, ) {

    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        //Prevent game from restarting if the game is already running
        return;
    }
    console.log('Game is starting...');
    gameIsRunning = true;
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner = getWinner(playerChoice, computerChoice);
    if (playerChoice) {
        winner = getWinner(playerChoice, computerChoice); 
    } else {
        winner = getWinner(computerChoice);
    }
    let message = `You chose ${playerChoice || DEFAULT_USER_CHOICE}, and the computer chose ${computerChoice}, so the result is `;

    if (winner === RESULT_DRAW) {
        message = message + 'a draw.';
    } else if (winner === RESULT_COMPUTER_WINS) {
        message = message + 'the computer won.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'you won.';
    }

    alert(message);
    gameIsRunning = false;
});


const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum = sum + validateNumber(num);
        } else if (operation === 'SUBTRACT') {
            sum = sum - validateNumber(num);
        }
    };
    resultHandler(sum);
};

// const subtractUp = function(resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum = sum - num;
//     };

//     resultHandler(sum, 'subtracting');
// };

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

// sumUp(showResult, 5, 3, 4, 5, 10, 12);
combine(showResult.bind(this, 'The result after adding is:'), 'ADD', 5, 3, 4, 5, 10, 12);
combine(showResult.bind(this, 'The result after subtracting is:'), 'SUBTRACT', 5, 3, 4, 5, 10, 12);

