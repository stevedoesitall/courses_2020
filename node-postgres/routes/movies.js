const { Router, response } = require('express')

const router = Router()

const pool = require('../db/index')

//Create
router.post('/', (req, res) => {
    const { movie_name, movie_length, movie_lang, release_date, age_certificate, director_id } = req.body
    pool.query(
        'INSERT INTO movies(movie_name, movie_length, movie_lang, release_date, age_certificate, director_id) VALUES($1, $2, $3, $4, $5, $6)',
        [movie_name, movie_length, movie_lang, release_date, age_certificate, director_id],
        (error, response) => {
            if (error) {
                return res.status(400).send({error: error})
            }
            res.status(200).send({ok: true})
        }
    )
})

//Read
router.get('/', (req, res) => {
    const id = req.body.movie_id
    if (!id) {
        pool.query('SELECT * FROM movies', (error, response) => {
            if (error) {
                return res.status(400).send({error: error})
            }
            res.status(200).send(response.rows)
        })
    }

    else {
        pool.query('SELECT * FROM movies WHERE movie_id = $1', [id], (error, response) => {
            if (error) {
                return res.status(400).send({error: error})
            }
            res.status(200).send(response.rows[0])
        })
    }
})

//Update
router.patch('/', (req, res) => {
    const id = req.body.movie_id

    if (!id) {
        return res.status(400).send({error: 'movie_id is required'})
    }

    delete req.body.movie_id

    const allowedUpdates = ['movie_name', 'movie_length', 'movie_lang', 'release_date', 'age_certificate', 'director_id']
    const updates = Object.keys(req.body)
    const values = Object.values(req.body)
    values.push(id)
    const idNum = values.length
    let queryString = ''
    
    updates.forEach((update, index) => {
        if (!allowedUpdates.includes(update)) {
            return res.status(400).send({error: `Invalid update: ${update}`})
        }
        let comma = updates.length != (index + 1) ? ',' : ''
        queryString = `${queryString} ${update}=($${index+1})${comma}`
    })

    pool.query(
        `UPDATE movies SET ${queryString} WHERE movie_id=($${idNum})`, values, (error, response) => {
            if (error) {
                console.log(error)
                return res.status(400).send({error: error})
            }

            res.status(200).send({ok: true})
        }
    )
})

//Delete
router.delete('/', (req, res) => {
    const id = req.body.movie_id

    if (!id) {
        return res.status(400).send({error: 'movie_id is required'})
    }

    pool.query(
        `DELETE FROM movies WHERE movie_id=($1)`, [id], (error, response) => {
            if (error) {
                console.log(error)
                return res.status(400).send({error: error})
            }

            res.status(200).send({ok: true})
        }
    )
})

module.exports = router