var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var $Fs = require('fs');
var path = require('path');
var multer  = require('multer');
var upload = multer({
    dest: './uploads'
});



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
	//app.post('/sys/nadd',urlencodedParser, function (req, res) {
		// 单域多文件上传：input[file]的 multiple=="multiple"
		// app.post('/uploads', upload.array('imageFile', 5), function(req, res, next) {
		//     // req.files 是 前端表单name=="imageFile" 的多个文件信息（数组）,限制数量5，应该打印看一下
		//     for (var i = 0; i < req.files.length; i++) {
		//         // 图片会放在uploads目录并且没有后缀，需要自己转存，用到fs模块
		//         // 对临时文件转存，fs.rename(oldPath, newPath,callback);
		//         fs.rename(req.files[i].path, "upload/" + req.files[i].originalname, function(err) {
		//             if (err) {
		//                 throw err;
		//             }
		//             console.log('done!');
		//         })
		//     }
		
		//     res.writeHead(200, {
		//         "Access-Control-Allow-Origin": "*"//允许跨域。。。
		//     });
		//       // req.body 将具有文本域数据, 如果存在的话
		//     res.end(JSON.stringify(req.files)+JSON.stringify(req.body));
		// })

	app.post('/sys/nadd',upload.single('pic'), function (req, res) {	
		 $Fs.rename(req.file.path, "uploads/" + req.file.originalname, function(err) {
        if (err) {
            throw err;
        }
        console.log(req.file.path, "uploads/" + req.file.originalname);
    })
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    res.end(JSON.stringify(req.file)+JSON.stringify(req.body));
		// if(req.session.uname)
		// {
		// 	res.send(req.session.uname)
		// }
		// else
		// {
		// 	res.send("没有登录,不能访问!")
		// }
	 //    var array = [];
		
		// $Fs.readFile( path.join(__dirname,'../') +"/config/news.json", 'utf8', function (err, data) {
		// 	data = JSON.parse( data );
		// 	console.log(data.length)
		// 	array =req.body;
		// 	array.id=data.length			
		
		// 	data.push(array)			
		// 	// $Fs.writeFile(path.join(__dirname,'../') +"/config/news.json",JSON.stringify(data), err => {
				
		// 	// })
		// 	res.end( JSON.stringify(data));
		// })
		
		
	})		 
}