// Javascript class expression  

// when we wanna create class expression we store the class in a variable and drop the identifier  

// Example: 
let Person = class {
  constructor(userName, userEmail, userAge, userHobby){
    if (typeof userName === "string") {
      this.userName = userName;
    } 
    else {
      throw new Error('User name must be String')
    }
    if (typeof userEmail === "string") {
      this.userEmail = userEmail;
    } 
    else {
      throw new Error('User email must be String')
    }
    if (typeof userAge === "number" || userAge < 0) {
      this.userAge = userAge;
    } 
    else {
      throw new Error('User age must be Number and/or not negative');
    }
    if (typeof userHobby === "string") {
      this.userHobby = userHobby;
    } 
    else {
      throw new Error('User Hobby must be String')
    }
  }
  printDetails() {
    console.log(this.userName, this.userEmail, this.userAge, this.userHobby);
  }
}

const me = new Person('AIB', 'xyz@gmail.com', 17, 'Coding and Reading books');

me.printDetails();

// First class citizen 
function Factory(aClass) {
  return aClass();
}

let product = Factory(new class {
  print() {
    console.log('Hello');
  }
});