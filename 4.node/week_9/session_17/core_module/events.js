import events from 'events';
const eventEmitter=new events.EventEmitter();
const meth1=()=> console.log("Method 1 Call");
const meth2=()=> console.log("Method 2 Call");
const meth3=()=> console.log("Method 3 Call");
//add methods in eventemiiter instance 
eventEmitter.on("myevent",meth1);
eventEmitter.on("myevent",meth2);
eventEmitter.on("myevent",meth3);
//emit or fire 
eventEmitter.emit("myevent");//fire myevent instance
//remove some methods from myevent 
console.log("-----------------------")
eventEmitter.removeListener("myevent",meth2);
eventEmitter.emit("myevent");//fire myevent instance