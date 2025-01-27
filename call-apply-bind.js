
// Call, Apply and Bind method 

/*
let's begin by looking at what this three method does

• call  method basically let us call an object for the 'this' keyword to reffer to that object, call method also takes arguments

• apply method does the same thing as call method but also takes or let us provide arguments inside an array 

• The only difference between the call and apply method is that call method takes arguments seperately and apply method takes arguments in an array

• bind method let's us borrow methods from another object 

*/

// Examples →→→

// call method 

const Person = {
  fullName: function (city, country) {
    return `Name: ${this.firstName} ${this.lastName} from ${city}, ${country}`;
  }
}

const person1 = {
  firstName: 'Jhon',
  lastName: 'Doe'
}
const person2 = {
  firstName: 'Alex',
  lastName: 'Benjamin'
}

console.log(Person.fullName.call(person2, 'Sydney', 'Australia')); // returns 'Name: Alex Benjamin from Sydney, Australia'

// apply method 

console.log(Person.fullName.apply(person1, ['Sydney', 'Australia'])); // returns 'Name: Jhon Doe from Sydney, Australia'

// bind method 
