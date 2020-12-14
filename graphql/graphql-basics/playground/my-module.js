//Named export - Has a name and is listed out, can have as many as needed
//Default export - Has no name, can only have one

const message = "Some message from my-module.js"
const name = "Steve"
const location = "New York City"

const getGreeting = (name) => {
    return `Welcome to the course, ${name}`
}

export { message, name, getGreeting, location as default }