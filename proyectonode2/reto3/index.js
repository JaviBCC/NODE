const fs = require('fs/promises');
let readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

let dataConsole = require('./readConsole');
let dataWrite   = require('./writeAndRead');

// dataConsole.readConsolePromise()
//     .then ((myObject) => {
//         dataWrite.writeAndReadPromise(myObject, "./usuario.json")

//     })
//     .catch((error) => {
//         console.log(error); 
//     });


async function callModules() {

    let myUserPrint = await dataConsole.readConsolePromise();

    await dataWrite.writeAndReadPromise(myUserPrint, "./usuario.json");


}

callModules();


