const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 8080;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chatroom!'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', () => {
    console.log("User disconnected from server");
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
