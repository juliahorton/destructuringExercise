// Object Destructuring 1: What does the following code return/print? 

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

// Object Destructuring 2: What does the following code return/print?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
let {numPlanets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears); // ?

// Object Destructuring 3: What does the following code return/print? 

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
  
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

// Array Destructuring 1: What does the following code return/print?


// Array Destructuring 2: What does the following code return/print?


// Array Destructuring 3: What does the following code return/print?


// ES2015 Refactoring

// ES5 Assigning Variables to Object Properties

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
var a = obj.numbers.a;
var b = obj.numbers.b;

// Write an ES2015 Version: 


// ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// Write an ES2015 Version: 



// raceResults(): Write a function called raceResults which accepts a single array argument. It should return an object with the keys "first" (the first element in the array), "second" (the second element in the array), "third" (the third element in the array), and "rest" (all other elements in the array). Write a one line function to make this work using an arrow function, destructuring, and enhanced object assignment (same key/value shorthand). 

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/