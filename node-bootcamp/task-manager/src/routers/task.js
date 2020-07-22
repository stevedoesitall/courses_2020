const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send({error: `Something went wrong`})
    } 

})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send({error: `Something went wrong`})
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if (!task) {
            res.status(404).send({error: `No task found with ID ${_id}`})
        } else {
            res.status(200).send(task)
        }
    } catch (error) {
        res.status(500).send({error: `Something went wrong`})
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidUpdate = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidUpdate) {
        return res.send({error: 'Not a valid update!'})
    }

    try {

        const task = await Task.findById(req.params.id)

        updates.forEach((update) => {
            task[update] = req.body[update]
        })

        await task.save()

        if (!task) {
            return res.status(404).send({error: 'Task does not exist'})
        }
        
        res.status(200).send(task)

    } catch (error) {
        res.status(500).send({error: 'Something went wrong.'})
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send({error: 'No task with this ID exists'})
        }

        res.status(200).send()
    } catch (error) {
        res.status(500).send({error: error})
    }
})

module.exports = router