/* initialization of a variable */

// a variable initialization can be done in 3 ways: var, let, const
// the main difference is that var is function-scoped meanwhile let and const are block-scoped

// the basic difference is that var and let can be riassigned, instead const is immmutable once is declared

// block-scoped means that the element is only avaliable in the block it is created, instead function-scoped
// means that the variable is avaliable in all our workspace

/* example */
var a = 5;
a = "kdjdkdkd";

let b = 5 // basically var blocked scoped
b = "23"

const c = 123
// c = "kdkdk" gives error

function es(){
    // console.log(variabile); // undefined
    // console.log(variabile2); // err access before initialization
    // console.log(costante); // err access before initialization
    var variabile = 1; // it's already accessable in es() fun as undefined till initialized
    let variabile2 = 2; // gives error if used outside his block and before initialization
    const costante = 3; // gives error if used outside his block and before initialization
}
es()
//console.log(variabile); // err access before initialization
//console.log(variabile2); // err access before initialization
//console.log(costante); // err access before initialization

