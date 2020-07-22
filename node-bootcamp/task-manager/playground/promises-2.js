require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete({
//     _id: '5f0ce09fe9e809e15085a0c5'
// }).then((result) => {
//     return Task.find({
//         completed: true
//     }).then((resultTwo) => {
//         console.log(resultTwo.length)
//     }).catch((error) => {
//         console.log(error)
//     })
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: true })
    return count
}

deleteTaskAndCount('5f0ce09fe9e809e15085a0c5').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})