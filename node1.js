var http = require('http');
var port = 3000;
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hello</h1>');
    res.end();//end
}).listen(port);