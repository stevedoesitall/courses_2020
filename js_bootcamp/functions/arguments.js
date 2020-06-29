//Default arguments

const getScoreText = (name = 'Player', score = 0) => {
    console.log(`${name} and ${score}`);
}

//Challenge

const calculateTip = (total, tip = 20) => {
    return total + (total * tip/100);
};

console.log(calculateTip(200));