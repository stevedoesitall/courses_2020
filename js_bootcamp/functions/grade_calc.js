const gradeCalculator = (score, total) => {
    const percentage = (score/total) * 100;
    if (percentage < 60) {
        return `You got an F! Your score is ${percentage}`;
    } else if (percentage > 60 && percentage < 70) {
        return `You got a D! Your score is ${percentage}`;
    } else if (percentage > 70 && percentage < 80) {
        return `You got a C! Your score is ${percentage}`;
    } else if (percentage > 80 && percentage < 90) {
        return `You got a B! Your score is ${percentage}`;
    } else {
        return `You got an A! Your score is ${percentage}`;
    }
};

console.log(gradeCalculator(100,100));