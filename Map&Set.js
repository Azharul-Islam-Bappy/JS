// Javascript Map and Set 

// Map 
const myMap = new Map();

const objKey = {id: 1};

// adding entries  
myMap.set('name', 'Alice'); // string as key 
myMap.set(34, 'Number'); // numbers as key 
myMap.set(objKey, 'Myobject'); // object as key
// Unlike traditional object, In map keys can be of "Any type"

// getting values
let x = myMap.get('name'); // returns 'Alice'
let y = myMap.get(34); // returns 'Number'
let z = myMap.get(objKey); // returns 'Myobject'

//check existence
let isTrue = myMap.has(34); // returns true

// Iterating over myMap, Maps are iterable
myMap.forEach((value, key) => { // maps returns value as the 1st argument and key as the 2nd
  console.log(`${key}: ${value}`);
});



// Set
const mySet = new Set(); // set helps us to create unique list of values

// adding entries 
mySet.add(4);
mySet.add(4); // ignores duplication
mySet.add('A string');

let list = [...mySet]; // returns a unique list of values
console.log(list);

// check existence
console.log(mySet.has(4)); // returns true

// size property
console.log(`Size:  ${mySet.size}`);

// Iterating over mySet, Sets are iterable
mySet.forEach(value => {
  console.log(`Value: ${value}`);
});