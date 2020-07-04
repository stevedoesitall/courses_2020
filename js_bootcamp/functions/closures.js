const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
console.log(counter)

//Adder

const createAdder = (a) => {
    //Inner function
    return (b) => {
        return a + b
    }
}

const addTen = createAdder(10)
const addOneHundred = createAdder(100)

console.log(addTen(2))
console.log(addOneHundred(2))

//Tipper

const createTipper = (tip) => {
    //Inner function
    return (billAmount) => {
        return (billAmount * tip) + billAmount
    }
}

const tipTenPer = createTipper(.10)
const tipFifteenPer = createTipper(.15)
const tipTwentyPer = createTipper(.20)

console.log(tipTenPer(100))
console.log(tipFifteenPer(100))
console.log(tipTwentyPer(100))