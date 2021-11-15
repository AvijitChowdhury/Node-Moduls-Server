/*
//module :path

const path = require('path');

const myPath = 'E:/Javascript/NodeJs/Core-Modules&server/index.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));
*/

// const os = require('os');

// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.cpus())

/*
//fs module
const fs = require('fs');

fs.writeFileSync('myfile.txt', 'hello engineer');

// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString());

fs.readFile('myfile.txt', (error, data) => {
    console.log(data.toString());
});
*/

const EventEmiter = require('events');
const School = require('./school');

const emiter = new EventEmiter();

const startPeriod = require('./school');

// // register a listener for bellring event
// emiter.on('belring', ({ period, text }) => {
//     console.log(`We need to run! ${period} ${text}`);
// });

// raise an event
const school = new School();
// register a listener for bellring event
school.on('belring', ({ period, text }) => {
    console.log(`We need to run! ${period} ${text}`);
});
school.startPeriod();
