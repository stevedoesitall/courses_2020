class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.age = age
        this.firstName = firstName
        this.lastName = lastName
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age} years old`

        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}`
        })
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes = [])
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        if (this.grade < 60) {
            return `${this.firstName} is failing the class with a ${this.grade}.`
        } else {
            return `${this.firstName} is passing the class with a ${this.grade}.`
        }
    }
}

const me = new Student('Steve', 'Giordano', 32, 10)
me.updateGrade(80)
console.log(me.getBio())