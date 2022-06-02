const express = require('express');
const app = express();

app.get('/', function(req, res) {
    
    console.log('Petición recibida del cliente');
    console.log('URL', req.method);
    console.log('METHOD', req.url);

    console.log(req.headers['content-type']);
    console.log(req.headers['content-length']);
    console.log(req.headers['user-agent']);

      let object = { ok: true,
                     message: "Recibido!"}

    res.send(JSON.stringify(object));
    res.end();

});


app.get('/bye', function(req, res) {

    console.log('Petición recibida del cliente');
    console.log('URL', req.method);
    console.log('METHOD', req.url);

    console.log(req.headers['content-type']);
    console.log(req.headers['content-length']);
    console.log(req.headers['user-agent']);


   let object = { ok: true,
        message: "Adios!"}

    res.send(JSON.stringify(object));
    res.end();

});

app.listen(4000);























