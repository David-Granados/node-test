// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`Hello World ${res.statusCode}`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var http = require('http') // Con require vamos a llamar al módulo interno de Node en cuestión. 

function webServer(req, res)
{
// En este caso, no será texto plano. Vamos a enviar código HTML
    res.writeHead(200, {'Content-Type':'text/html'}).end('<h1>Hola Node.js</h1>')
}

http.createServer(webServer).listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/')
