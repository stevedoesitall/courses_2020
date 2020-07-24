const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req, res) => res.send('Server up and running!'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f18b8d39afba9ef98528e3b')
//     // await task.populate('owner').execPopulate()
//     // console.log(task)
//     const user = await User.findById('5f18bb4eedd9c4f0b596b9f5')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()
