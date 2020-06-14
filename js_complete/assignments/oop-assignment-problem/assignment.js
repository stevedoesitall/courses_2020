class Course {

    #price = 0;

    get returnedPrice() {
        return '$' + this.#price;
    }

    set returnedPrice(value) {
        if (value < 0) {
            throw 'Invalid value';
        }
        this.#price = value;
    }

    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle,
        this.length = courseLength,
        this.returnedPrice = coursePrice
    }

    calcValue() {
        return this.length / this.#price;
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price)
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    // Don't need constructor/super since we have the same params
    // constructor(title, length, price) {
    //     super(title, length, price)
    // }
    publish() {
        console.log("Hi");
    }
}


const javaScriptCourse = new Course("JavaScript", 40, 10.99);
const nodeCourse = new Course("NodeJS", 30, 20.99);
const someCourse = new PracticalCourse("A course", 12, 10.99, 5);

javaScriptCourse.price;

console.log(javaScriptCourse, nodeCourse, someCourse);
console.log(javaScriptCourse.calcValue(), nodeCourse.calcValue());

const someCourseTwo = new TheoreticalCourse("Hihi", 5, 19);
console.log(someCourseTwo);
someCourseTwo.publish();