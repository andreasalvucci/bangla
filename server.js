const http = require('http');
const app = require('./app');

http.createServer(function(req,res){
  var fs = require('fs');
  fs.readFile('punti.json', function(err,data){
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(data);
    res.end();
  });
}).listen(80);
