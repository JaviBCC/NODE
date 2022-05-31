
const fs = require('fs/promises');
const readline = require("readline");

// let rl = readline.createInterface(process.stdin, process.stdout);


function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout

        });

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            


            rl.close();
        });


    });

    return question;
}



function readAndWrite() {

    rl.question('Indique su nombre: ', (respuesta) => {
        let myName = respuesta;
        
        rl.question('Indique su apellido: ', (respuesta1) => {
            let mySurname = respuesta1;
            
            rl.question('Indique su edad: ', (respuesta2) => {
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





