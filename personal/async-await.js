const getData = async () => {
    const response = await fetch('http://api.weatherstack.com/current?access_ke=41ae81407b1a44c566fc8f33f1df12f8&query=37.8267,-122.4233')
    try {
        const data = await response.json()
        try {
            const result = await data.error
            // data.error
            console.log(result)
        } catch (e) {
            console.log('Catch block 1 is running', e.message)
        }
        
    }
    catch (e) {
        console.log('Catch block 2 is running', e.message)
    }
}

getData()