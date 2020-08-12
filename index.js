var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var request = require('request');
app.set('view engine','ejs');
app.set('views', __dirname + '/'); 
app.use('/bdist', express.static('bdist'));
app.get('/', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/login.html'));     
})
app.post('/loginForm', urlencodedParser, function (req, res) {
	  var parpam ={};
	  parpam.phone = req.body.phone;
	  parpam.password = req.body.password;	
	  var url = 'http://101.200.129.62:8082/ty/incrementHf/user/login'
	  request({
	      url: url,
	      method: "POST",
	      json: true,
	      headers: {
			 "content-type": "application/json"	        		
	      },				  
	      body: parpam
	  }, function(error, response, body) {			  
	  	   res.end(JSON.stringify(response.body));
	  });       
})
app.get('/set', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/set.html'));
})
//派单中心
app.get('/pai', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/pd/pd_zx.html'));
})	
app.get('/paiinfo', function (req, res) {	
	
	//res.writeHead(200,{"Content-Type":"text/html"});
	//res.end(fs.readFileSync(__dirname + '/pd/pd_xq.html'));
	if(req.query.type==1)
	res.render('pd/pd_xqs.ejs',{id:req.query.id});
	 else
	 res.render('pd/pd_xq.ejs',{id:req.query.id});
	 //res.end();
})
//领取任务

app.get('/lqButton', urlencodedParser, function (req, res) {	
	 var parpam ={};
	 parpam.userId = req.query.userId;
	 parpam.taskId = req.query.taskId;
	 var url = 'http://101.200.129.62:8082/ty/incrementHf/task/recieveTask'
	 request({
	     url: url,
	     method: "POST",
	     json: true,
	     headers: {
	 			 "content-type": "application/json",
				 "token":req.query.token
	     },				  
	     body: JSON.stringify(parpam)
	 }, function(error, response, body) {			  
	 	   res.end(response.body);
	 });        		 
})		
//任务
app.get('/renwu', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/pd/renwu.html'));
})	
	
var server = app.listen(8081, function () { 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})