var http = require('http');
var express = require('express');
var app = express();

// view engine setup
app.set('views', __dirname+'/views');//view: 유저가 보는 타입 ,
app.set('view engine', 'ejs');//


// static file setting
app.use(express.static('public'));//변하지 않는 코드들 사용하겠다

//route setup
var index = require('./routes/index');//현재 디렉토리에서 라우터를 등록하겠다
app.use('/', index);

//port setup
var port = process.env.PORT || 3000;// || or  이라는 뜻


var server = http.createServer(app);// app변수 넣어주고 3000번 포트를 열겠다
server.listen(port);


var io = require('socket.io').listen(server);//
io.sockets.on('connection',function(socket){//event waiting, connection: someone connect, tnen start
    socket.emit('toclient',{msg:'Welcome !'});//socket init
    socket.on('fromclient',function(data){
        socket.broadcast.emit('toclient',data); // 자신을 제외하고 다른 클라이언트에게 보냄
        socket.emit('toclient',data); // 해당 클라이언트에게만 보냄. 다른 클라이언트에 보낼려면?
        console.log('Message from client :'+data.msg);
    });
});