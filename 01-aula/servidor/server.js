const { createServer } = require('http');
const requisicao = function(_, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Texto a ser exibido</h1>");
    response.end();
}

const server = http.createServer(requisicao);

const servidorNoAr = function() {
    console.log("servidor no ar!");
}

server.listen(3000, servidorNoAr);