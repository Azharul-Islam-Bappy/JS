// Javascript Arrays

let companies = ["Google", "OpenAI", "Microsoft", "Tesla"];
let cars = ["Toyota", "Volvo", "Honda", "Tata Motors"];

// Array methods

companies.pop(); // removes the last element from the Array
console.log(companies); // Output: ["Google", "OpenAI", "Microsoft"]

companies.push("Apple"); // adding an element to the end of the companies array 
console.log(companies); // Output: ["Google", "OpenAI", "Microsoft", "Apple"]

cars.shift(); // removes the first element from thr array
console.log(cars);  // Output: ["Volvo", "Honda", "Tata Motors"]

cars.unshift("BMW"); // adding an element to start of the array
console.log(cars); // Output: ["BMW", "Volvo", "Honda", "Tata Motors"]

// adding element to a specific index
companies.splice(1,0,"Nvidia"); 
console.log(companies); // Output: ["Google", "Nvidia", "OpenAI", "Microsoft", "Apple"]

// removing element from a specific index 
companies.splice(2,1);
console.log(companies);