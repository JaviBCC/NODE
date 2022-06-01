
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

function readConsole() {
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
            console.log(obj.nombre);

            fs.writeFile('./usuario.json', JSON.stringify(obj))
                .then(() => {

                    return fs.readFile('./usuario.json', 'utf8')

                })

                .then(myRead => {

                    console.log(JSON.parse(myRead));
                })

                .catch(err => {
                    console.log(err);

                })

        })

}

// readConsole();

async function readConsoleAsync(){
    let obj ={nombre: null, apellido:null, edad:null}

    try{
        obj.name    = await pregunta('Indique su nomnre: ')
        obj.surname = await pregunta('Indique su apellido: ')
        obj.edad    = await pregunta('Indique su edad: ')

        await fs.writeFile("./myJson1.json", JSON.stringify(obj));
        let myObj1 = await fs.readFile("./myJson1.json");
        console.log(JSON.parse(myObj1))

    }catch (error) {

        console.log(error);
    }
        
}

readConsoleAsync();

