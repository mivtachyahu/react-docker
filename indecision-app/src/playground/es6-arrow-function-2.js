const add = function (a, b) {
    return a + b;
}

console.log(add(55,1));

const user = {
    name: 'Andrew',
    cities: ['Tokyo', 'London', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}
console.log(multiplier.multiply());