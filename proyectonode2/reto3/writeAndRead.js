const fs = require('fs/promises');


//* CON THEN/CATCH *//


function writeAndReadPromise(object, path) {

    fs.writeFile(path, JSON.stringify(object))
    .then(() => {

        return fs.readFile(path, 'utf8')

    })
    .then(myRead => {

        console.log(JSON.parse(myRead));
    })
    .catch(err => {
        console.log(err);

    })

}


async function writeAndReadAsync(myUser){

    let obj ={nombre: null, apellido:null, edad:null}

    try{

        await fs.writeFile("./myJson1.json", JSON.stringify(myUser));

        let myObj1 = await fs.readFile("./myJson1.json");
        console.log(JSON.parse(myObj1));

    }catch (error) {

        console.log(error);
    }
        
}

module.exports = {writeAndReadPromise, writeAndReadAsync};




//* CON ASYNC/AWAIT *//







