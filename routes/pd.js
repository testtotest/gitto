var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var test = require('./test.js');

module.exports = app => {		 
		 app.get('/pai', function (req, res) {
			 test.test(req, res,'pd/pd_zx.html');	 	
		 })	
		 app.get('/paiinfo', function (req, res) {
			 if(req.query.type==1)
			 res.render('pd/pd_xqs.ejs',{id:req.query.id});
			 else
			 res.render('pd/pd_xq.ejs',{id:req.query.id});	
		 })
		 app.get('/pdxx', function (req, res) {
			  test.test(req, res,'pd/pd_xx.html');	          
		 })
}