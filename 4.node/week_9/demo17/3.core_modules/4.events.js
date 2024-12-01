import events from 'events'

const eventEmitter = new events.EventEmitter();

const method1 = () => console.log("Method 1 is called.")
const method2 = () => console.log("Method 2 is called.")
const method3 = () => console.log("Method 3 is called.")

// * Add methods in eventEmitter's instance
eventEmitter.on('myEvent', method1);
eventEmitter.on('myEvent', method2);
eventEmitter.on('myEvent', method3);

//* emit or fire
eventEmitter.emit('myEvent')    // fire myEvent instance

//* Remove some methods from myEvent
eventEmitter.removeListener('myEvent', method2)

//* Again emit or fire
eventEmitter.emit('myEvent')    // fire myEvent instance