let array = Array.from(Array(20000).keys())

const someFunc = () => {
    array.forEach(item => {
        console.log(item)
    })
    console.log('hi')
}

someFunc()