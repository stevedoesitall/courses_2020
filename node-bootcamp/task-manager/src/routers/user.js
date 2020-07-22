const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    } catch (error) {
        res.status(400).send()
    } 
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        
        await req.user.save()
        res.send()

    } catch (error) {
        res.status(500).send({error: 'Error logging out'})
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({message: 'You have been logged out of all devices'})

    } catch (error) {
        res.status(500).send({error: 'Error logging out of all devices'})
    } 
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            res.status(404).send({error: `No user found with ID ${_id}`})
        } else {
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(500).send({error: `Something went wrong`})
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid update!'})
    }

    try {

        const user = await User.findById(req.params.id)

        updates.forEach((update) => {
            user[update] = req.body[update]
        })

        //Waits for middleware to finish
        await user.save()

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send({error: 'No user with this id'})
        }
            res.status(200).send()
    } catch (error) {
        res.status(500).send({error: error})
    }
})

module.exports = router