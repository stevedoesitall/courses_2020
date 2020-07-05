const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Must be a number')
        }, 2000)
    })
}


//Async always returns a Promise
const processData = async () => {
    let data = await getDataPromise('abc')
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log(`Data: ${data}`)
}).catch((error) => {
    console.log(error)
})