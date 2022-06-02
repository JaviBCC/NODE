let fs = require("fs");
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);


function readAndWrite() {

    rl.question('Indique su nombre: ', (respuesta) => {
        console.log(`${respuesta}`);
        let myName = respuesta;
        
        rl.question('Indique su apellido: ', (respuesta1) => {
            console.log(`${respuesta1}`);
            let mySurname = respuesta1;
            
           
            rl.question('Indique su edad: ', (respuesta2) => {
                console.log(`${respuesta2}`);
                let myAge = respuesta2;
                
                let usuario2 = {"name":         myName,
                                "surname":      mySurname,
                                "age":          myAge}
    
        
                    fs.writeFile('./usuario2.json', JSON.stringify(usuario2), function(){
    
                        fs.readFile('./usuario2.json', 'utf8', function(err, myRead){
                            console.log(JSON.parse(myRead));
                    
                        });   
    
                    });
            
            });
    
        });
    
    });

}

readAndWrite()