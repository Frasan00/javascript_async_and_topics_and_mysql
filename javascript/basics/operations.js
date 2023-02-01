/* Operations */
// in js || and && are strange, they are refered to an element as "truish or false"
// false elements are: "", null, undefined, 0

/* or || */
// || gives back the first trueish element of an expression
const falsish = "" || "dsdsds"; // dsdsds

/* and && */
// && gived back the first falshish element or the last truish element if all elements are thruish
const trueish = "dskds" && 0 && "hdh"; // 0

/* sum */
// sum in js can be strange, here some examples:
console.log("50"+50) // "5000" num+str = concat(num+str): string
console.log(true+50) // false=0 and true = 1; so num+0 or num+1, in this case prints 51
console.log(true+" giggi"); //"true giggi" boolean is taken as a literal string
console.log("gigi"+null); // "giginull"
console.log(0+null); // 0
console.log(true+null); // 1 null doesn't matter and {false: 0, true: 1}
console.log(undefined+null); // NaN (not a number)
