const express = require('express');
const	app = express();
const port = 3000;

var io = require('socket.io').listen(app.listen(port,()=>{
  console.log('app is running on port 3000');
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	socket.on('slide-changed', function(num){
    io.emit('change', num);
	});
});