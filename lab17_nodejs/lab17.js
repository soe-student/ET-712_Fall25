console.log("Soe Kaythi");
console.warn("This is a warning message! Check your last line");


console.log('----Example 2: creating a simple module file----');
// Load the module
import name from './mod.js';

console.log(name.helper("Peter"));
console.log(name.id(12345));
console.log(name.email("peter@naverland.edu"));

console.log('----Example 3: event emitter----');
let events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('test', function() {
    console.log('a');
});