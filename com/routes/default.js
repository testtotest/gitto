var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var $Fs = require('fs');
var path = require('path');
module.exports = app=> {		
	 app.get('/sys/', function (req, res) {	
		   res.render('sys/index');	
	 })	
	
	app.post('/sys/login',urlencodedParser, function (req, res) {
		if(req.body.uname=="163")	
		{
			 var newslist=JSON.parse($Fs.readFileSync(path.join(__dirname,'../') +"/config/news.json", 'utf8') || '[]');	     
			res.render('sys/test',{newslist:newslist});	
		}
		else
		{
			res.header("Content-Type", "text/html; charset=utf-8")
			res.end("用户名或密码错误")
		}		
	})	
	app.post('/sys/nadd',urlencodedParser, function (req, res) {
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