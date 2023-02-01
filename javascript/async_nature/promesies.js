/* promesies  */

// promesies are a way to handle async fuctions in js
// often it's best practice to use async await, ut promesies can be useful if we're working with a funtion that does not support async in the first place

// a promise takes a func with two elements
const iWillDoThem = new Promise((resolve, reject) => {
    let a = "Homework";
    //let a = "";
    if (a != ""){
        resolve("I did them")
    }
    // we can put whatever we want inside reject
    else reject("Nah i won't do them")
})

// now we put the callbacks
iWillDoThem
.then((message) => console.log(message)) // resolve case
.catch((err) => console.log(err)) // reject case


// example of a promise function
function functionWithPromise(){
    return new Promise((resolve, reject) => {
        let a = "Homework";
        //let a = "";
        if (a != ""){
            resolve("I did them")
        }
        // we can put whatever we want inside reject
        else reject("Nah i won't do them")
    });
}
// now we put the callbacks
functionWithPromise()
.then((message) => console.log(message)) // resolve case
.catch((err) => console.log(err)) // reject case

// promise.all([promises]) is a function that allows us to execute multiple promise functions in order and add a "then" after all are completed
Promise.all([functionWithPromise, iWillDoThem])
.then(() => console.log("finished all my homeworks"))
.catch(() => console.log("didn't finished all my homeworks"))

// promise.race([promesis]) returns as soon one of the promise is done;