class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } years old!` ;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); 
        this.major = major;
    }
    hasMajor() {
        return !!this.major
        //converts truthy to true, or falsey to false
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` They are studying ${this.major}!!`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Person('Machoo Bee', 37);
console.log(me.getGreeting())
console.log(me.getDescription());


const student = new Student('Machoo Bee', 37, 'Philosophy');
console.log(student.getGreeting())
console.log(student.getDescription());
console.log(student.hasMajor());

const traveller1 = new Traveller('Bartek', 204, 'Algiers');
const traveller2 = new Traveller('Bartosz', 243);
console.log(traveller1.getGreeting());
console.log(traveller2.getGreeting());
