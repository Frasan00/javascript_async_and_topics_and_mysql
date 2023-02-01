/* event loop */

// First we start with the v8 engine, the sync calls are handled by the call stack inside the v8 in a LIFO way
// but when we have async calls those are passed and handled in the libuv api, that is a async multi-thread pool (can work in parallel)
// When the libuv api completes an async request, it sends a callback to the event queue
// the event queue is a FIFO data structure that is "listened" by the event loop that will send the callback to the call-stack once is empty
// at this point if the callback is sync is sent as a response, otherwise the cicle starts again

// es.
console.log("first stamp"); // it's sync so it's immediately printed

setTimeout(() => {
    console.log("second stamp"); // async, will be stamped last
}, 10)

console.log("third stamp"); // sync will be stamped after the first
console.log("other stamp"); // since the v8 engine is LIFO those stamps will be excecuted before the setTimeout that is async
console.log("other stamp"); // since the v8 engine is LIFO those stamps will be excecuted before the setTimeout that is async
console.log("other stamp"); // since the v8 engine is LIFO those stamps will be excecuted before the setTimeout that is async
console.log("other stamp"); // since the v8 engine is LIFO those stamps will be excecuted before the setTimeout that is async 