/* Basic javascript types */

// number
// string
// null
// undefined
// object
// function

/* particularity of objects in js */
// When we initialize an object we use a riferiment in memory that points at the same space in memory
// this happens only with objects, es.
const object1 = {
    a: 1,
    b: 20
}
const object2 = object1;
object1.a = 100;
// sharing the same part in memory  both object1/2 will have "a" changed
console.log(object1, object2);