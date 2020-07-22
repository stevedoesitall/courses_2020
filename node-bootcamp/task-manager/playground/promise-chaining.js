require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f0ce50d1dade8e24dd07b5e

// User.findByIdAndUpdate('5f0ce670d37fdae279a677f3', {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ 
//         age : 1
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// })

//To use async/await you must start with a function

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f0ce670d37fdae279a677f3', 100).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})