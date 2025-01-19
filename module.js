// JS modules 

// modules help us to break or organize our codes into seperate files  

// there are two ways for exporting and importing  
// 1| Named export → •inline export , • all at once at the bottom
// 2| default export 

// example ↓

// suppose we have two file at same directory 'import.js' and 'export.js'

// file: export.js 

export let greet = 'Hello, World'; // inline export

let person = {
  name: 'Sung Jinwoo',
  age: 20
}

let greet = 'Welcome Mr. ' + person.name

function msg() {
  return 'Hello, World';
}

export {person, greet} // exporting all at once 
export default msg;
// file: import.js 

// when importing named exports we need to use the curly brakets
// Example ↓
import {person, greet} from './export.js'
import msg from './export.js' // we don't need curly brakets for default importing