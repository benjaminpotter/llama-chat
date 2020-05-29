const express = require('express');
const app = express();

const PORT = 3000;

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

});