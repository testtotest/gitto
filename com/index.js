var express = require('express');
var config =require('./config/default');
var app = express();
app.use('/bdist', express.static('bdist'));
var ejs=require('ejs');
app.engine('html',ejs.__express);
app.set('view engine','html');
app.set('views', __dirname + '/views'); 


 app.get('/', function (req, res) {
	 const $Fs = require('fs');
	 let files = $Fs.readdirSync(__dirname + '/views/test');	 
	 files.forEach((file,index) => {
	 	 let old_data = $Fs.readFileSync(__dirname + '/views/test/' + file,'utf8');
		 let new_data = old_data.replace(/\<include.*src="(.*)">.*\<\/include\>/gi,(match,p1,offset,string) => {
		         let inc_data = $Fs.readFileSync(__dirname + '/views/test' + p1,'utf8'); 
		         return inc_data; 
		     });
		$Fs.writeFileSync(__dirname +'/views/' + file,new_data);	 
		 
	 });
	 res.render('index');
	 //res.sendFile( __dirname + "/" + "index.html" );
 })	
app.get('/about', function (req, res) {
	res.render('about');
})
app.get('/pro', function (req, res) {
	res.render('pro');
})
app.get('/news', function (req, res) {
	res.render('news');
})
app.get('/contact', function (req, res) {
	res.render('lx');
})			 
var server = app.listen(config.port, function () { 	 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})