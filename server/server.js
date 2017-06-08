const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 8080;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log("User disconnected from server");
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
