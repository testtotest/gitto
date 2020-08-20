var fs = require('fs');
var request = require('request');
module.exports.test = function (req, res,txt) {		
     res.writeHead(200,{"Content-Type":"text/html"});
     res.end(fs.readFileSync('./views/'+txt));    
};
module.exports.etest = function (req, res) {		
     res.render('pd/renwu.ejs',{id:req.query.id});
};
module.exports.ptest = function (req, res) {
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
};