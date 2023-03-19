// first we have objects without need of a class
const giovanni = {
    age: 24,
    eyes: 2,
    lastName: "bianchi",
    saluta: () => {return "Hi i'm giovanni"}
}
console.log(giovanni.age, giovanni.saluta());

/* then we have factory and constructor classes */

// factory func (no need to use new to create an instance or to use this)
function createPersona(name, lastName) {
    return {name, lastName}
}
const persona1 = createPersona("gianni", "sandro");

// constructor function (uses new notation to create an instance and uses this)
function CreatePersona2(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.greet = function(){return "Hi, i'm "+this.name+" "+this.lastName}
}
const persona2 = new CreatePersona2("gianni", "sandro");
console.log(persona2.greet())

// those are sub-ways to make objects fast, we can also do a "standard" class (note abstract classes can only be done in ts)
class Persona {

    // fields
    name;
    lastName;

    //constr
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    greet(){ return "Hi, i'm "+this.name+" "+this.lastName }
}

const persona3 = new Persona("salomone", "santi");
console.log(persona3.greet())

/* prototypes */

// a prototype is a extension of an object, when we call a method in an object js will first see if this method exist in
// that object, and then in it's prototype
// a prototype should be insert in a non-implemented part of an object (es class or construct function)
Persona.prototype.newMethod = () => { // we add a new method to the Person class
    return "I'm a prototype method!";
}

console.log(persona3.newMethod());