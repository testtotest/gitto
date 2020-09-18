const http = require('http');
var conf =require('./conf.js');
var test =require('./test.js');

const url = require('url');

const fs = require('fs');
const mime = require('mime');

 http.createServer(function(req,res) {
	 var urlObj = url.parse(req.url.toLowerCase(), true);
	 req.query = urlObj.query;
	 req.pathname = urlObj.pathname;
	 req.method = req.method.toLowerCase();
	 res.render = function (filename, telData) {		
		  fs.readFile(filename, (err, data) => {				
			  res.setHeader('Contnet-Type', mime.getType(filename));
			  res.end(data);
		  })	  
	 }
	 if (req.url === '/' || req.url === '/index' && req.method === 'get') {
		 fs.readFile(conf.dataPath, 'utf8', (err, data) => {
		      if (err && err.code !== 'ENOENT') throw err;
		      var list = JSON.parse(data || '[]');	
			  console.log(list)
		     // data = JSON.parse( data );
			 // delete data[2];
			  //data.splice(0,1);
			  //var str = JSON.stringify(data);
			  //fs.writeFile(conf.dataPath,str,function(err){
				 //  console.log("----------删除成功------------");
			  //})	
				 // for(var key in params){
							  // if(person.data[i][key]){
							  // data[i][key] = params[key];
							  // }
							  // }
			    //console.log("----------修改成功------------");
			  	//console.log(list.slice(1)) s*p,(p+1)*s分页	  
		  })
	      res.end();
	     //test.index(req,res);
	 }else if(req.url === '/testadd' && req.method === 'post')
	 {
		 test.addPost(req, res);		
	 }
}).listen(conf.port, () => {
  console.log('http://localhost:' + conf.port);
});