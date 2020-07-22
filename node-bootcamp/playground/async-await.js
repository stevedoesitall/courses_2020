const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be positive')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sumTwo = await add(sum, 50)
    const sumThree = await add(sumTwo, -3)
    return sumThree
}

doWork().then((result) => {
    console.log('result', result)
}).catch((error) => {
    console.log('error', error)
})