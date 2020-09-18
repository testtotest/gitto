var express = require('express');
var config =require('./config/default');
var routesys =require('./routes/default');
var app = express();
app.use('/bdist', express.static('bdist'));
var ejs=require('ejs');
app.engine('html',ejs.__express);
app.set('view engine','html');
app.set('views', __dirname + '/views'); 
routesys(app);

const $Fs = require('fs');
 app.get('/', function (req, res) {
	
	 let files = $Fs.readdirSync(__dirname + '/views/test');	 
	 files.forEach((file,index) => {
	 	 let old_data = $Fs.readFileSync(__dirname + '/views/test/' + file,'utf8');
		 let new_data = old_data.replace(/\<include.*src="(.*)">.*\<\/include\>/gi,(match,p1,offset,string) => {
		         let inc_data = $Fs.readFileSync(__dirname + '/views/test' + p1,'utf8'); 
		         return inc_data; 
		     });
		$Fs.writeFileSync(__dirname +'/views/' + file,new_data);			 
	 });
	var piclist=[
			 {"id":0,"pic":"bdist/img/aba.jpg","title":"关于我们","titles":"您急需一台能真正直饮的净水器"} , 
			 {"id":1,"pic":"bdist/img/excl.jpg","title":"定制专属净水方案","titles":"您急需一台能真正直饮的净水器"},
			 {"id":2,"pic":"bdist/img/pur.jpg","title":"打造净水生活","titles":"您急需一台能真正直饮的净水器"},
			 ];	 
	 var prolist=JSON.parse($Fs.readFileSync(__dirname +"/config/pro.json", 'utf8') || '[]');
	 var list = JSON.parse($Fs.readFileSync(__dirname +"/config/test.json", 'utf8') || '[]');
	 var newslist=JSON.parse($Fs.readFileSync(__dirname +"/config/news.json", 'utf8') || '[]');
	 res.render('index',{list: list,prolist: prolist,piclist:piclist,newslist:newslist});
	 //res.sendFile( __dirname + "/" + "index.html" );	
 })	

app.get('/about', function (req, res) {
	res.render('about');
})
app.get('/pro', function (req, res) {
	var prolist=JSON.parse($Fs.readFileSync(__dirname +"/config/pro.json", 'utf8') || '[]');
	res.render('pro',{list:prolist});
})
app.get('/info', function (req, res) {
	var prolist=JSON.parse($Fs.readFileSync(__dirname +"/config/pro.json", 'utf8') || '[]');
	var info;
	for(var i=0;i<prolist.length;i++)
	{
		if(prolist[i].id==req.query.id)
		{
			info=prolist[i];
		}
	}	
	info["c"]=prolist.length;
	res.render('info',{info:info});
})
app.get('/news', function (req, res) {
	var newslist=JSON.parse($Fs.readFileSync(__dirname +"/config/news.json", 'utf8') || '[]');
	res.render('news',{newslist:newslist});
})
app.get('/newslist', function (req, res) {
var newslist=JSON.parse($Fs.readFileSync(__dirname +"/config/news.json", 'utf8') || '[]');
	res.render('newslist',{newslist:newslist});
})
app.get('/ninfo', function (req, res) {
	res.render('ninfo');
})
app.get('/contact', function (req, res) {
	res.render('lx');
})			 
var server = app.listen(config.port, function () { 	 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})