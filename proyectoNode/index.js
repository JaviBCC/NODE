let fs = require("fs");
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

// import{readAndWrite} from './readConsole';
// import{newObject}    from './writeAndRead';


let dataConsole = require('./readConsole');
let dataWrite   = require('./writeAndRead');


dataConsole.readConsole(function(usuario2) {

    dataWrite.newObject(usuario2);

})











