const db = client.db(databaseName)

db.collection('tasks').deleteOne({
    description: 'Wash dishes'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

db.collection('users').deleteMany({
    age: 32
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

db.collection('users').updateOne({
    _id: new ObjectID('5f0b1f03aae2e18695f08ad7')
}, {
    $inc: {
        age: 1
    }
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

db.collection('tasks').updateMany({
    completed: false
}, {
    $set: {
        completed: true
    }
}).then((result) => {
    console.log(result.modifiedCount)
}).catch((error) => {
    console.log(error)
})


db.collection('tasks').findOne({ _id: new ObjectID('5f0b22086caee3874894b477') }, (error, result) => {
    if (error) {
        return console.log(err8r)
    }

    console.log(result)
})

//FindMany
db.collection('tasks').find({ completed: false }).toArray((error, result) => {
    if (error) {
        return console.log(error)
    }
    
    console.log(result)
})