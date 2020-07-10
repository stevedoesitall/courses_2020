const http = require('http')

const accessKey = '41ae81407b1a44c566fc8f33f1df12f8'
const url = 'http://api.weatherstack.com/current?access_key=41ae81407b1a44c566fc8f33f1df12f8&query=45,-75&units=f'

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()