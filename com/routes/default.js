var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var $Fs = require('fs');
var path = require('path');


module.exports = app=> {		
	 app.get('/sys/', function (req, res) {	
		   res.render('sys/index');	
	 })	
	 //退出登录
	 app.get('/sys/nologin', function (req, res) {
		  req.session.destroy();
		  res.redirect("http://www.baidu.com"); 
		  res.send("退出成功")
	})
	app.post('/sys/login',urlencodedParser, function (req, res) {
		if(req.body.uname=="163" && req.body.upwd=="123123")	
		{
			
			 req.session.uname=req.body.uname
			
			 var newslist=JSON.parse($Fs.readFileSync(path.join(__dirname,'../') +"/config/news.json", 'utf8') || '[]');	     
			 res.render('sys/test',{newslist:newslist});	
		}
		else
		{
		
			res.header("Content-Type", "text/html; charset=utf-8")
			res.end("用户名或密码错误")
		}		
	})	
	app.get('/sys/ninfo', function (req, res) {
		 var newslist=JSON.parse($Fs.readFileSync(path.join(__dirname,'../') +"/config/news.json", 'utf8') || '[]');	 
		var info;
		for(var i=0;i<newslist.length;i++)
		{
			if(newslist[i].id==req.query.id)
			{
				info=newslist[i];
			}
		}	
		info["c"]=newslist.length;
		res.render('sys/ninfo',{info:info});
	})
	app.post('/sys/nedit',urlencodedParser, function (req, res) {
		var array = [];
		$Fs.readFile( path.join(__dirname,'../') +"/config/news.json", 'utf8', function (err, data){
			data = JSON.parse( data );
			array =req.body;
			
			for(var i=0;i<data.length;i++)
			{
				if(data[i].id==array.id)
				{
					data[i].title=array.title
				}
			}
			
		})
		res.end();
	})
	app.get('/sys/ndel', function (req, res) {
		var newslist=JSON.parse($Fs.readFileSync(path.join(__dirname,'../') +"/config/news.json", 'utf8') || '[]');
		for(var i=0;i<newslist.length;i++)
		{			
			if(newslist[i].id==req.query.id)
			{
				newslist.splice(req.query.id,1);
			}			
		}
		
		res.send("删除成功")
	})
	app.post('/sys/nadd',urlencodedParser, function (req, res) {
		if(req.session.uname)
		{
			res.send(req.session.uname)
		}
		else
		{
			res.send("没有登录,不能访问!")
		}
	    var array = [];
		
		$Fs.readFile( path.join(__dirname,'../') +"/config/news.json", 'utf8', function (err, data) {
			data = JSON.parse( data );
			console.log(data.length)
			array =req.body;
			array.id=data.length			
		
			data.push(array)			
			// $Fs.writeFile(path.join(__dirname,'../') +"/config/news.json",JSON.stringify(data), err => {
				
			// })
			res.end( JSON.stringify(data));
		})
		
		
	})		 
}