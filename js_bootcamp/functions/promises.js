//Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        }
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
})

//Promise

const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Must be a number')
        }, 2000)
    })
}

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})

//Promise chaining!
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})