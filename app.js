/* const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'conten-type': 'application/json' });


        let salida = {
            nombre: 'omar',
            edad: 26,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('hola mundo');
        res.end();

    })
    .listen(8080);

console.log('Es cuchado el puerto 8080'); */