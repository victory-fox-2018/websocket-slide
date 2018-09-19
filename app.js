const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('next slide', function(newIndex){
    io.emit('next slide', newIndex);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});