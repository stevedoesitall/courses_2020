const fetch = require('node-fetch')

// const forecast = async (lat, long, callback) => {
//     const accessKey = '41ae81407b1a44c566fc8f33f1df12f8'
//     const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=-${lat},${long}&units=f`
//     const response = await fetch(url)
//     try {
//         if (response.status === 200) {
//             const data = await response.json()
//             if (!data.error) {
//                 callback(undefined, data.current.temperature)
//             } else {
//                 throw new Error('Error: No data')
//             }
//         } else {
//             throw new Error('Error: Bad request')
//         }
//     } catch (error) {
//         callback(error)
//     }
// }

const forecast = async (lat, long) => {
    const accessKey = '41ae81407b1a44c566fc8f33f1df12f8'
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=-${lat},${long}&units=f`
    const response = await fetch(url)
    if (response.status === 200) {
        try {
            const data = await response.json()
            if (!data.error) {
                return data.current.temperature
            } else {
                throw new Error('No data')
            }
        } catch (error) {
            throw new Error('No data')
        }
    } else {
        throw new Error('Bad request')
    }
}

module.exports = forecast
