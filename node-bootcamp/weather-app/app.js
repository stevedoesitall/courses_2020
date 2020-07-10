const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const searchTerm = process.argv[2]

if (searchTerm) {
  geocode(searchTerm, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, data) => {
      if (error) {
        return console.log(error)
      }

      const temperature = data
      console.log(`It's curently ${temperature} degrees in ${location}`)
    })
  })
} else {
  console.log('Please provide a valid search term')
}