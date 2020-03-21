let currentResult = 0;
const logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNum) {
    const calcDesc = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDesc);
}

function writeToLog(
    operator,
    initialResult,
    userInputVal,
    currentResult
) {
    const logEntry = {
        operator,
        initialResult,
        userInputVal,
        currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calcType) {
    const userInputVal = getUserInput();
    const initialResult = currentResult;
    let operator;

    if (calcType === "add") {
        currentResult += userInputVal;
        operator = "+";
    } else if (calcType === "subtract") {
        currentResult -= userInputVal;
        operator = "-";
    } else if (calcType === "multiply") {
        currentResult *= userInputVal;
        operator = "*";
    } else if (calcType === "divide") {
        currentResult /= userInputVal;
        operator = "/";
    }

    createAndWriteLog(operator, initialResult, userInputVal);
    writeToLog(calcType.toUpperCase(), initialResult, userInputVal, currentResult);
}

function add() {
    calculateResult("add");
}

function subtract() {
    calculateResult("subtract");
}

function multiply() {
    calculateResult("multiply");
}

function divide() {
    calculateResult("divide");
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


let calculationDescription = `(${currentResult} +10) * 3 / 2 - 1`;