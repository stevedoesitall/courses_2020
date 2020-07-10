const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapApiKey}&limit=1`
  request({url: url, json: true}, (error, { body }) => {
    if (error) {
      callback('Something went wrong!', undefined)
    }
    else if (body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      const data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      }
      callback(undefined, data)
    }
  })
}
