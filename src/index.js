const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// initialization
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares


// sockets  
    require('./sockets')(io);

// Static Files
app.use(express.static(path.join(__dirname, 'public'))); // unira directorios __dirname :> aqui te devuelve la direccion

// Starting the Server
server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});