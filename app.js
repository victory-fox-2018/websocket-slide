var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// io.emit('some event', { for: 'everyone' });

io.on("connection", function(socket) {

  console.log('a user connected');

  socket.on("slide left", function(slideIndex) {
    console.log('slide left jalan', slideIndex)
    io.emit("test left", slideIndex);
  });

  socket.on("slide right", function(slideIndex) {
    console.log('slide right jalan', slideIndex)
    io.emit("test right", slideIndex);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});