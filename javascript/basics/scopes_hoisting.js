/* hoisting */

// is a process that grabs all declared functions and var declared variables and put them on top of our code make it reachable everywhere in our code

console.log(value); // undefined, cause it's like that at the begenning of our code there is a var value;
var value = "ciao";
console.log(value); // ciao

console.log(greet()); // Ciao sono una funzione
// console.log(greetConst()); // Error Cannot access 'greetConst' before initialization
function greet(){ return "Ciao sono una funzione"; }
// const greetConst = () => { return "Ciao sono una costante con all'interno una funzione"; }

// note: this process don't work with let and const that will throw an error

/* scopes closures */

// var is function scoped while let and const are block scoped
// in general a variable is accesable in every child scope but not on a father scope expect if it's global

const saluto = "Ciao da const";
function anotherGreet(){ 
    // {const salutoInterno = "Ciao da dentro"} // const is blocked scope and this is a child scope, it means that salutoInterno is not accesable from the outside
    // console.log(salutoInterno)
    return saluto; 
    
    
} 
console.log(anotherGreet()); // Ciao (anotherGreet() is a child scope of the global scope and sees "saluto")