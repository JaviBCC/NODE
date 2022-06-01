
const fs = require('fs/promises');
const readline = require('readline');


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


function readConsolePromise() {
    const promesa = new Promise((resolve,reject)=>{

        let obj ={nombre: null, apellido:null, edad:null}

        pregunta('Indique su nombre: ')
    
            .then((respuesta) => {
                obj.nombre = respuesta;
    
                return pregunta('Indique su apellido: ')
            })
            .then((respuesta) => {
                obj.apellido = respuesta;
    
                return pregunta('Indique su edad: ')
            })
            .then((respuesta) => {
                obj.edad = respuesta;
                resolve(obj);
    
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            })
                
    })

   return promesa;
}

// readConsolePromise()
// .then((objeto) => {console.log(objeto)})
// .catch((error) => {console.log(error)})
// module.exports = {readConsole};



/* READCONSOLE ASYNC */


async function readConsoleAsync(){
    let obj ={nombre: null, apellido:null, edad:null}

    try{
        obj.name    = await pregunta('Indique su nomnre: ')
        obj.surname = await pregunta('Indique su apellido: ')
        obj.edad    = await pregunta('Indique su edad: ')


    }catch (error) {

        console.log(error);
    }
        
}

// module.exports = {readConsolePromise};
module.exports = {readConsolePromise};


