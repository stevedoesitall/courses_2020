const express = require('express')
const movies = require('./routes/movies')
const app = express()

app.use(express.json())
app.use('/movies', movies)

const port = 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})