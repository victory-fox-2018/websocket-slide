var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');

app.use(cors())

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('direction', function(msg){
    io.emit('direction', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});