const studentInfo = require('./information.js');

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello I'm ${studentInfo.name} from ${studentInfo.campus} Campus!`,
    e : "oO",
    T : "U "
}));