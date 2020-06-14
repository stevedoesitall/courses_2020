const prices = [10.99, 5, 30, 3.99];

const tax = 0.19;

const adjustedPrices = prices.filter((price, index) => {
    return price > 10;
});

console.log(adjustedPrices);

const startingPoint = 0;
const reducedPrice = prices.reduce((prevVal, currentVal) => {
    return prevVal + currentVal;
}, startingPoint);

const ids = new Set([1,2,3]);

let person = {name: 'Steve'};

const persons = new WeakSet();
persons.add(person);