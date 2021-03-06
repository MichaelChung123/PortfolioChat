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
    // Setting Username
    socket.on('joinRoom', username => {
        let id = socket.id;
        const user = {
            id,
            username
        };

        socket.join('room');

        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

        // Broadcast when a user connects
        // socket.broadcast.emit('message', formatMessage(botName, 'A user has joined the chat'));
        socket.broadcast
            .to('room')
            .emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        // Listen for chatMessage
        socket.on('chatMessage', (message) => {
            io.to('room').emit('message', formatMessage(username, message));
        });

        // Runs when client disconnects
        socket.on('disconnect', () => {
            io.emit('message', formatMessage(botName, `${user.username} user has left the chat`));
        });
    });

});

const PORT = 4000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));