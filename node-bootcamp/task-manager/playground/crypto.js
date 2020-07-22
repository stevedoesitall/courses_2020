const crypto = require('crypto')
const hash = crypto.createHash('sha256')

hash.update('password')
console.log(hash.digest('hex'))

//Note to self: Try using pbkdf2 to reverse engineer