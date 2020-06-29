const isValidPassword = (password) => {
    if (password.length > 8 && !password.includes('password')) {
        return true;
    }
}

console.log(isValidPassword('password2'));