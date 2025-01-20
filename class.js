// Javascript Classes  

// syntax 
/*
class class_name{
  constructor(parameter){
    this.parameter = parameter;
  }
  // methods
}
*/

// Example:
class Person{
  constructor(userName, age, country){
    this.userName = userName;
    this.country = country;
    this.age = age;
  }
  printDetails() { 
    console.log(`My name is ${this.userName}`);
    console.log(`My age is ${this.age}`);
    console.log(`And I'm from ${this.country}`);
  }
}

let user1 = new Person('Larry Page', 33, 'US') // Creating an instance of Person

alert(user1.printDetails();