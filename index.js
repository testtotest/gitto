var express = require('express');
var config =require('./config/default');
var routes = require('./routes/default.js');
var routeu = require('./routes/user.js');
var routep = require('./routes/pd.js');
var app = express();
app.set('view engine','ejs');
app.set('views', __dirname + '/views'); 
app.use('/bdist', express.static('bdist'));
routes(app);
routeu(app);
routep(app);
var server = app.listen(config.port, function () { 	 
	  var host = server.address().address
	  var port = server.address().port 
	  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})