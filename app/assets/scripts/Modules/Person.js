/*function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;

}
Person.prototype.greet = function () {
    console.log('Hello, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
};*/

class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log('Hi there, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
    }

}

//module.exports = Person;
export default Person
//export default name of the class