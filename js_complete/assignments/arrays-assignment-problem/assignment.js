const myNumbers = [1, 3, -27, 8, 42, 87, 1000];

const filteredNumbers = myNumbers.filter(number => {
    return number > 5;    
});
console.log("Filtered numbers are:", filteredNumbers);

const mappedNumbers = myNumbers.map(number => {
    return {num : number};
});
console.log("Mapped numbers are:", mappedNumbers);

const reducedNumbers = myNumbers.reduce((prevValue, currentVal) => {
    return prevValue * currentVal;
}, 1);

console.log("Reduced numbers are:", reducedNumbers);

const findMax = (array) => {
    array.sort((a,b) => {
        if (a > b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    });
    return [ array[0], array[array.length-1] ];
};

const [ maxNum, minNum ] = findMax(myNumbers);

const newList = new Set();

newList.add(2)
