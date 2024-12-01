console.log("First message.")   // run this command = node First.js


// * Asynchronous flow
console.log('Start')
setTimeout(()=> {
    console.log("Event called") // displayed after End msg. Hence Node.js is non-blocking i.e. asynchronous language.
})
console.log('End')