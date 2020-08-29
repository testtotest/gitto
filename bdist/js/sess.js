
var uid=$.session.get('uid')
var uphone=$.session.get('phone')
var  pic=$.session.get('pic')
var token=$.session.get('token')
var parpam ={}	
		
if(token==null)
{	
	$(location).attr('href', '/');					
}



