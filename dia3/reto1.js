
const http = require('http');

const server = http.createServer(function(request, response) {

    console.log('Petición recibida del cliente');
    console.log('URL', request.method);
    console.log('METHOD', request.url);

    console.log(request.headers['content-type']);
    console.log(request.headers['content-length']);
    console.log(request.headers['user-agent']);

    response.writeHead(200, {'Content-Type': 'application/json'});

    if (request.url == "/bye") {

        let object = { ok: true,
                    message: "Adios!"}

        response.write(JSON.stringify(object));

    } else {

        let object = { ok: true,
            message: "Recibido!"}

        response.write(JSON.stringify(object));
    }

    response.end();

});

server.listen(3000);
















