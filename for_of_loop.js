// for of loop iterates through the direct values of iterable  

let arr = [2, 5,10, 30, 65];
let obj = [
  {user: "Alex", age: 17},
  {user: "Max Tegmark", age: 17}
];

for (let num of arr) {
  console.log(num); // iterating over direct values of 'arr'
}

for (let {user} of obj) {
  console.log(user); // logs the user: "Alex" and "Max Tegmark"
}