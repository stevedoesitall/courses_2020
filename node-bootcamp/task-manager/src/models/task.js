const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 1) {
                throw new Error('No task description provided!')
            }
        }
    }, 

    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = Task