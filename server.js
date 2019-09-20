const http = require('http');
const express = require('express');

const app = express();
http.createServer(function(req,res){
  var fs = require('fs');
  fs.readFile('punti.json', function(err,data){
    res.writeHead(200, {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*' });
    res.write(data);
    res.end();
  });
}).listen(80);
