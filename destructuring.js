// destructuring in JS 

// destructuring helps unpack properties of Objects  (it can also destructure any iterables such as "Arrays", "Strings" etc.)

// Object destructuring: 
const person = {
  fName: "Jhon",
  lName: "Doe",
  age: 47
}
let {f1, f2, f3} = person;
console.log(f3);

// Array destructuring:
const companies = ['OpenAI', 'Meta', 'Amazon', 'Google'];

let [c1,c2,c3] = companies;
console.log(c2);

// String destructuring
const str = 'Universe';
let [l1,l2,l3] = str;
console.log(l3); // output: 'i'

// we can also skip elements by adding two or more commas

const shoes = ['Nike', 'Adidas', 'Puma', 'Bata', 'Apex', 'Blue Ribons', 'Onitsuka'];

let [s1,s2,,s4] = shoes; // here the double commas basicaly skips the third element in the array if we add more commas it will skip more elements
let [,,,,s5] = shoes; // it basicaly destructures 5 number element in the array 
console.log(s5); // output: "Apex"