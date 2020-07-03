const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

//Boilerplate try-catch setup
try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('Catch block is running', e.message)
}