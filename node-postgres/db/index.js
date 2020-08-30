const { Pool } = require('pg')
const { user, host, database, password, port } = require('../secrets/db-configs')

const pool = new Pool({ user, host, database, password, port })

module.exports = pool

// postgres://postgres:postgres@localhost:5432/movie_data'