const http = require('http');
const express = require('express');
const aplicacao = express();


const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket)=> {
    console.log("o usuário conectou");
    socket.addListener('nova mensagem escrita', (msg) => {
        io.emit('nova mensagem escrita', msg);
    }) 

})

aplicacao.use(express.static('public'));

servidorHttp.listen(1000);
