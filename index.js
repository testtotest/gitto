var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var request = require('request');
var axios = require("axios");
var config =require('./config/default');
app.set('view engine','ejs');
app.set('views', __dirname + '/views'); 
app.use('/bdist', express.static('bdist'));


app.get('/', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/login.html'));     
})

app.get('/reg', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/reg.html'));     
})
app.get('/forget', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/forget.html'));     
})
app.get('/pdxx', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/pd/pd_xx.html'));     
})

app.get('/set_pwd', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/set_pwd.html'));     
})
app.get('/e_pwd', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/e_pwd.html'));     
})

app.get('/set_wtfk', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/set_wtfk.html'));     
})
//常见问题
app.get('/set_cjwt_list', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/user/set_cjwt_list.html'));     
})
app.get('/set_zh_tx', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/pd/set_zh_tx.html'));     
})
app.get('/set_zh_ls', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/bank/set_zh_ls.html'));     
})

app.get('/pdkf', function (req, res) {	
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync(__dirname + '/views/pd/pd_kf.html'));     
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
	res.end(fs.readFileSync(__dirname + '/views/user/set.html'));
})
//派单中心
app.get('/pai', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/views/pd/pd_zx.html'));
})	
app.get('/paiinfo', function (req, res) {
	 if(req.query.type==1)
	 res.render('pd/pd_xqs.ejs',{id:req.query.id});
	 else
	 res.render('pd/pd_xq.ejs',{id:req.query.id});	
})
//领取任务

app.get('/lqButton', function (req, res) {	
	 // var parpam ={};
	 // parpam.userId = req.query.userId;
	 // parpam.taskId = req.query.taskId;
	 // var url = 'http://101.200.129.62:8082/ty/incrementHf/task/recieveTask'
	 // request({
	 //     url: url,
	 //     method: "POST",
	 //     json: true,
	 //     headers: {
	 // 		 "content-type": "application/json",
		// 	 "token":req.query.token
	 //     },				  
	 //     body: JSON.stringify(parpam)
	 // }, function(error, response, body) {			  
	 // 	   res.end(response.body);
	 // });    
	res.end()
})		
//任务
app.get('/renwu', function (req, res) {
	res.render('pd/renwu.ejs',{id:req.query.id});
})	

app.get('/set_card_info', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/views/bank/set_card_info.html'));
})	
app.get('/set_card', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/views/bank/set_card.html'));
})

app.get('/set_zh', function (req, res) {
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(fs.readFileSync(__dirname + '/views/bank/set_zh.html'));
})

app.get('/axios', function (req, res) {
	// axios({
	// 	headers: {'token': 'Mi0xODI0OTAwMjk5My0xNTk3MzY5MzgxNTM1LThlNDA4OWE3OGMzNjQ2MWM5ZmI3YTViYmE3NGY4MjFk'},
	//     method: 'Get',
	//     url: 'http://101.200.129.62:8082/ty/incrementHf/user/headPortraitList'
	// }).then(function (response) {
 //         console.log(response.data);
 //    })
 //    .catch(function (error) {
 //         console.log(error);
 //    });
	
	res.end()
})
app.get('/axiosForm', function (req, res) {
	res.end('ok')
})

var server = app.listen(config.port, function () { 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})