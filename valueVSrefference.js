// Valur vs Refference

/*
Primitives Data Type ↓
 • Numbers
 • Strings
 • Booleans
 • Bigint
 • Symbol
 
*/
/*
Object types ↓
 • Object
 • Arrays
 • Date
 • RegEx 
 • Promises etc.
 
*/ 

// when we store primitive data types in a variable it holds the actual value, whereas when we store Object types data in a variable it  holds the refference (memory address) of  the Object the Object type data


// Codes 

let n1 = 6; // this variable stores the actual value which is 6
let n2 = n1; // here n2 stores the value copied from n1

n1 = 10; // now what will be the value of n2, 10? Nooooo n2 is still 6 because n1 gets copied by value not by refference
console.log(`n1=${n1}  &  n2=${n2}`); // you see!!


let user1 = {name: 'Bob', age:24};
let user2 = user1;

user2.name = 'Henry';
console.log(user1.name); // huh!! How is user1.name = "Henry"?? That is because when we store a Object types data it stores  the refference (memory address) to that Object not the actual value, "user1" and "user2" reffers to the same memory address so changes in "user2" is affecting user1

user1 = {name: 'Alice', age:27}; // reasigning user1 no longer reffers to the old memory address
console.log(user1); // you see!!