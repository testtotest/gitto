var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var test = require('./test.js');

module.exports = app => {	
	
		 app.get('/renwu', function (req, res) {
			 test.etest(req, res)	 	
		 })	
		 app.get('/set_card_info', function (req, res) {
			 test.test(req, res,'bank/set_card_info.html')		 	
		 })	
		 app.get('/set_card', function (req, res) {
			 test.test(req, res,'bank/set_card.html')		 	
		 })
		 
		 app.get('/set_zh', function (req, res) {
			 test.test(req, res,'bank/set_zh.html')		 	
		 })
		 app.get('/set_zh_ls', function (req, res) {
		 			 test.test(req, res,'bank/set_zh_ls.html')		 	
		 })
		
		 
}