console.log("Soe Kaythi");
console.log('----Example 1: console----');
console.warn("This is a warning message! Check your last line");
console.error("ERROR! Port is not responding!");
console.trace("Trace Location:");

setTimeout(() => {
    console.warn("Warning! input string only for the next line");
}, 3000);


console.log('----Example 2: creating a simple module file----');
const name=require('./mod');

console.log(name.helper("Peter"));
console.log(name.id(12345));
console.log(name.email("peter@naverland.edu"));

console.log('----Example 3: event emitter----');
let events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('test', function() {
    console.log('a');
});

eventEmitter.emit('test');