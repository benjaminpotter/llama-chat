const express = require('express');
const app = express();

const axios = require('axios');
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Authorization'] = 'k3j5DxNUV9P5njlYxdmhAAceAE2t5mmp';

const PORT = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('client'));

// routing

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

var http = app.listen(PORT, () => {
    console.log("Listening on: " + PORT);
});

const io = require('socket.io')(http);
io.on('connection', (socket) => {

    console.log('socket connected');

    socket.on('enter-request', (data) => {
        // when a user presses the enter button

        // check validity

        socket.emit('enter-auth-success');
    });

    socket.on('sent-gif', data => {
        console.log('hellow?');
        socket.emit('recieve-gif', {url: data.url});
    });

});