// Javascript getter and setter 

// getter and setter allows to define object accessors (Computed properties) 

// Getter (the 'get' keyword) 

const person = {
  fName: 'Jhon',
  lName: 'Doe',
  country: 'UK',
  get countryName() {
    return this.country;
  }
}
person.countryName;

/*
the person.countryName is doing same as ↓
countryName: function () {
  return this.country;
}
person.countryName();

Differences:
this line 'person.countryName();' is basically calling a method whereas 
"
get countryName() {
    return this.country;
}
person.countryName;
" is basically calling a property  

why use Getter?
• getter ensures better quality data
• easier syntax
*/

// setter 
const car = {
  brand: "Tesla",
  model: "",
  set modelName(modelName) {
    this.model = modelName;
  }
}
car.modelName = "X";
console.log(car.model); // output "X"

// we can set values of properties using setter