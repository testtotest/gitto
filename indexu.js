var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var request = require('request');
app.set('view engine','ejs');
app.set('views', __dirname + '/'); 
app.use('/bdist', express.static('bdist'));
app.get('/', function (req, res) {
	var requestData ={}
	requestData.token ='';
	var url = 'http://101.200.129.62:8082/ty/incrementHf/user/headPortraitList'	
	request({
	    url: url,
	    method: "GET",
	    json: true,
	    headers: {
			 ////"content-type": "application/json",
	        ////"content-type": "application/x-www-form-urlencoded",
			"token":"Mi0xODI0OTAwMjk5My0xNTk3MTk5MjU0NTQyLWUxZWY1M2UwMTI5NTQ5NmZhNjM1MTM0NDg5ZTE5Yzlm"
	    }
	  ////  body: requestData
	}, function(error, response, body) {
		//response.body.result
	     console.log(response.body.message)
		 res.render('test.ejs',{arr:response.body.result});
		 res.end();
	}); 

    
     
})
app.get('/user/reg', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/reg.html'));
})
app.get('/login', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/login.html'));
})		
var server = app.listen(8081, function () { 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})