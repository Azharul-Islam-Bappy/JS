// Inheritance in JS 

// Inheritance Inheritance basically means that One Object can inherit the properties and methods from another Object

// CODES

// Class based Inheritance: sometimes also called syntactic sugar
class Person{
  talk() {
    return 'Talking';
  }
}
const me = new Person(); //here me is inheriting the method "talk" from  Person
console.log(me.talk()); // returns "Talking"

// Function based Inheritance
function Car() {};

Car.prototype.start = function () {
  return 'Starting car';
}

const toyota = new Car(); // here we're inheriting the method from 'Car' function

console.log(toyota.start()); // returns "Starting car"

// Inheritance with pure Objects 
const Product = {
  productDeatail: function () {
    return 'Here is the product details: Product Details'
  }
}

// first way
const soap = Object.assign(Product);
console.log(soap)

// second way
const shampoo = {}
Object.setPrototypeOf(shampoo, Product);
console.log(shampoo);