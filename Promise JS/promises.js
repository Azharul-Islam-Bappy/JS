// JS Promises

// some component code
function createElem(elem) {
  return document.createElement(elem);
}

const myPromise = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest(); // creating a new instance of XMLHttpRequest
  
  req.open("GET", "data.json"); // initializing the request 
  req.onload = function () {
    if (req.readyState == 4 && req.status == 200) {
      resolve(req.responseText);
    }
    else{
      reject(`Error: ${req.status}`);
    }
  }
  req.onerror = function () {
    reject('Network error occured');
  }
  req.send(null); // sending the request
});

// Promise chaining
myPromise
  .then( (response) => {
    const data = JSON.parse(response); // converting the json data
    
    return data;
    
  })
  .then(data => {
    console.log(data);
    data.forEach((obj) => {
      let row = createElem('tr');
      let name = createElem('td'), age = createElem('td'), country = createElem('td');
      
      name.innerText = obj.name;
      age.innerText = obj.age;
      country.innerText = obj.country;
      
      row.appendChild(name);
      row.appendChild(age);
      row.appendChild(country);
      
      document.querySelector("tbody").appendChild(row);
    })
  })
  .catch((error) => {
    console.log(error);
  })

console.log(myPromise);