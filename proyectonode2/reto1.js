
let usuario = {"name":          "Juan",
               "surname":       "Fernandez",
               "age":            "35"}


const fs = require('fs/promises')


//* THEN/CATCH *//

    fs.writeFile('./usuario.json', JSON.stringify(usuario))
    .then( () => {

        return fs.readFile('./usuario.json', 'utf8')

    })

    .then( myRead => {

        console.log(JSON.parse(myRead));
    })

    .catch(err => {
        console.log(err);

    })


//* ASYNC/AWAIT *//

    async function newObject(usuario) {

        try {
            await fs.writeFile('./usuario.json', JSON.stringify(usuario))

            const readUser = await fs.readFile('./usuario.json', 'utf8')

            console.log(JSON.parse(readUser));
        
        } catch (error)  {

            console.log(error);
        }
    }

    newObject(parUser);






