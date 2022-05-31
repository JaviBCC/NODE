let fs = require("fs");


function newObject(myUser) {

    fs.writeFile('./usuario3.json', JSON.stringify(myUser), function(){
        fs.readFile('./usuario3.json', 'utf8', function(err, myRead) {
            console.log(JSON.parse(myRead));

        });   
    });
}


module.exports = {newObject};

