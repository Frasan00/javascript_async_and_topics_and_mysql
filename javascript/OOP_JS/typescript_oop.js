"use strict";
// typescript adds a lot of functionalities for oop
const scrumbledEgg = {
    mainIngredient: "eggs",
    secondIngredient: "salt",
    temperature: 80
};
console.log(scrumbledEgg.mainIngredient);
class Italiano {
    constructor(name, lastName, nation) {
        this.name = name;
        this.lastName = lastName,
            this.nation = nation;
    }
    greet() {
        return "Ciao sono " + this.nation + " e mi chiamo " + this.name;
    }
}
// abstract class (can have defined fields or methods and has a constructor)
class LivingBeing {
    constructor(name, walks) {
        this.living = true; // defined field
        this.name = name;
        this.walks = walks;
    }
    isLiving() { return this.living; } // implementation detail
    doeswalk() { return this.walks; }
    ;
    greet() { }
    ; // totally generic method
}
class Human extends LivingBeing {
    constructor(name, salary) {
        super(name, true); // a human walks
        this.salary = salary;
    }
    // i can also override visibility of fields and methods
    doeswalk() {
        /* other things */
        return this.walks;
    }
    greet() {
        return "Hi i'm " + this.name + ", I walk and i make " + this.salary + "$ for year";
    }
}
const person = new Human("Gianni", 10000);
console.log(person.greet());
