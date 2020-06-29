let num = 101.123;
console.log(num.toFixed(2));

const rounded = Math.round(num);
const floored = Math.floor(num);
const ceilinged = Math.ceil(num);
console.log(`${floored}, ${ceilinged}`);

const makeGuess = (guess) => {
    const MIN_NUM = 1;
    const MAX_NUM = 5;
    
    const randomNum = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;

    if (guess === randomNum) {
        return `Nailed it!`;
    } else {
        return `Sorry! You guessed ${guess} and the answer was ${randomNum}`;
    }
};

console.log(makeGuess(3));