// typescript adds a lot of functionalities for oop

/* types */
// in ts you can define a custom type
type recipe = {
    mainIngredient: string,
    secondIngredient: string,
    temperature: number
}

const scrumbledEgg: recipe = {
    mainIngredient: "eggs",
    secondIngredient: "salt",
    temperature: 80
}
console.log(scrumbledEgg.mainIngredient);

// interfaces (an interface only provides fields and methods that must be implemented but remains generic, alse an interface does not have a constructor)
interface HumanInterface{
    name: string,
    lastName: string,
    nation: string

    greet(): string
}
class Italiano implements HumanInterface{
    name: string;
    lastName: string;
    nation: string;
    
    constructor(name: string, lastName: string, nation: string){
        this.name = name;
        this.lastName = lastName,
        this.nation = nation
    }

    greet() {
        return "Ciao sono "+this.nation+" e mi chiamo "+this.name;
    }
}

// abstract class (can have defined fields or methods and has a constructor)
abstract class LivingBeing{

    protected living: boolean = true; // defined field
    protected name: string;
    protected walks: boolean;

    constructor(name: string, walks: boolean){
        this.name = name;
        this.walks = walks;
    }

    protected isLiving(){ return this.living } // implementation detail
    protected doeswalk(): boolean{ return this.walks; };
    protected greet(){}; // totally generic method
}

class Human extends LivingBeing{

    protected salary: number;

    constructor(name: string, salary: number){ // we add a field that only human can have (we cant add unimplemented fields in interfaces)
        super(name, true); // a human walks
        this.salary = salary;
    }

    // i can also override visibility of fields and methods
    public doeswalk() {
        /* other things */
        return this.walks;
    }

    public greet(): string{ // override of return type and method's body
        return "Hi i'm "+this.name+", I walk and i make "+this.salary+"$ for year";
    }
}

const person = new Human("Gianni", 10000);
console.log(person.greet());



