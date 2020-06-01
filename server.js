const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./src/utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const index = require('./routes/index')

// Set static folder
app.use(index);

let botName = 'Chat Bot';

// Run when a client connects
io.on('connection', socket => {
    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

    // Broadcast when a user connects
    socket.broadcast.emit('message', formatMessage(botName, 'A user has joined the chat'));

    // Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', formatMessage(botName, 'A user has left the chat'));
    });

    // Listen for chatMessage
    socket.on('chatMessage', (message) => {
        io.emit('message', formatMessage('User', message));
    });
});

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));