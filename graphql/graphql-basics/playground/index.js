import myCurrentLocation, { message, getGreeting, name } from "./my-module"
import add, { subtract } from "./math"

console.log("Message: ", message)
console.log("Location: ", myCurrentLocation)

console.log(getGreeting(name))

console.log(add(1, 2))
console.log(subtract(1, 2))