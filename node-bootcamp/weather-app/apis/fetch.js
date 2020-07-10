const fetch = require('node-fetch')

const forecast = async (lat, long, callback) => {
    const accessKey = '41ae81407b1a44c566fc8f33f1df12f8'
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=-${lat},${long}&units=f`
    const response = await fetch(url)
    if (response.status === 200) {
        const data = await response.json()
        if (!data.error) {
            callback(undefined, data)
        } else {
            callback('Something went wrong!', undefined)
        }
    } else {
        callback('Something went wrong!', undefined)
    }
}

forecast(-75, 45, (error, response) => {
    if (error) {
        return console.log('ERROR:', error)
    }
    console.log(response)
})

// const geocode = async (address, callback) => {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapApiKey}&limit=1`
//     const response = await fetch(url)
//     if (response.status === 200) {
//         const data = await response.json()
//         callback(data)
//     } else {
//         throw new Error('Something went wrong!')
//     }
//   }