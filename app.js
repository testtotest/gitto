var url='http://101.200.129.62:8082'
var uid=$.session.get('uid')
var uphone=$.session.get('phone')
var  pic=$.session.get('pic')
var token=$.session.get('token')
var parpam ={}				
if(token.length==0)
{
	$(location).attr('href', 'login.html');					
}

