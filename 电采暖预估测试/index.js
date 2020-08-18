var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var config =require('./config/default');
app.use('/dist', express.static('dist'));

app.get('/', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/index.html'));     
})
app.get('/info', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/info.html'));     
})


var server = app.listen(config.port, function () { 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})