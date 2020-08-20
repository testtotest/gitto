var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var test = require('./test.js');
module.exports = app => {	
		// usersRouter = express.Router();
		// app.use('/user', usersRouter);
		// usersRouter.get('/reg', function (req, res) {
		//       console.log("ok")
		// })
		app.get('/', function (req, res) {test.test(req, res,'user/login.html')})	
		app.get('/reg', function (req, res) {
					  test.test(req, res,'user/reg.html')		         
		})
		app.get('/forget', function (req, res) {
					  test.test(req, res,'user/forget.html')   
		})
		app.post('/loginForm', urlencodedParser, function (req, res) {
					 test.ptest(req, res)
		})
		app.get('/set', function (req, res) {
					 test.test(req, res,'user/set.html')
		})
		app.get('/set_pwd', function (req, res) {
					 test.test(req, res,'user/set_pwd.html')
		})
		app.get('/e_pwd', function (req, res) {
					 test.test(req, res,'user/e_pwd.html')
		})
		app.get('/set_pic', function (req, res) {
					 test.test(req, res,'user/set_pic.html')
		}) 
		
		//问题反馈
		app.get('/set_wtfk', function (req, res) {
					  test.test(req, res,'user/set_wtfk.html')		         
		})
		//常见问题
		app.get('/set_cjwt_list', function (req, res) {
			test.test(req, res,'user/set_cjwt_list.html')		   
		})
		app.get('/cjwt_info', function (req, res) {	
			 res.render('user/set_cjwt_info.ejs',{id:req.query.id});	
		})
}