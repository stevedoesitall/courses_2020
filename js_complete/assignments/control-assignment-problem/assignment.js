const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const UPPER_LIMIT = .7;
const LOWER_LIMIT = .2;
const NUMBERS_ARRAY = [1, 2, 3, 4, 5];

if (randomNumber > UPPER_LIMIT) {
    alert(`Random Number #1 is above the limit! ${randomNumber}`);
}

if (randomNumber > UPPER_LIMIT && randomNumberTwo > UPPER_LIMIT) {
    alert(`Random Number #1 (${randomNumber} and Random Number #2 (${randomNumberTwo} are both above the limit!)`);
} else if (randomNumber < LOWER_LIMIT || randomNumberTwo < LOWER_LIMIT) {
    alert(`Random Number #1 (${randomNumber} or Random Number #2 (${randomNumberTwo} is below the limit!)`);
}

console.log("Using the for loop:");
for (let i = NUMBERS_ARRAY.length - 1; i >= 0; i--) {
    console.log(NUMBERS_ARRAY[i]);
}

console.log("Using the for-of loop:");
for (const number of NUMBERS_ARRAY) {
    console.log(number);
}