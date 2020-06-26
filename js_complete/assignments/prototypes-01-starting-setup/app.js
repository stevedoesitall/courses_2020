class AgedPerson { 
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson {
    name = 'Steve';

    constructor() {
        super();
        this.age = 30;
    }

    greet() {
        console.log('Hi my name is ' + this.name);
    }
}
const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);