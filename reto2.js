
let usuario = {"name":          "Juan",
               "surname":       "Fernandez",
               "age":            "35"}


const fs = require('fs');


function newObject(myUser) {
    fs.writeFile('./usuario.json', JSON.stringify(myUser), function(){
    fs.readFile('./usuario.json', 'utf8', function(err, myRead){
        console.log(JSON.parse(myRead));

    });   

    });
}

newObject(usuario);


           







