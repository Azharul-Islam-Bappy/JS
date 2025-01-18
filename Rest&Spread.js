// rest parameter & spread operator

// rest parameter 
// It collects multiple elements into an single array, it is used in function parameter and must be the last parameter 

function restParameter(game1, game2, ...games) {
  console.log(game1, game2, ...games);
}

restParameter("Pubg", "Flappy Bird", "Temple run", "Minecraft", "Solo leveling"); 

//spread operator 
// Both spread operator and rest parameter is syntactically same but differ in where they're used or can be and the purpose they serve  

const luxuryCars = ["BMW", "Mercedes", "McLaren"];
const normalCars = ["Tyota", "Honda"];

const allCars = [...luxuryCars, ...normalCars];
console.log(allCars);