const path = require("path");

console.log(`The file name is ${path.basename(__filename)}`);
console.log(process.argv)

function grab(flag){
    let indexAfterTheFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterTheFlag]
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);