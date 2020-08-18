var url='http://101.200.129.62:8082'
var uid=$.session.get('uid')
var uphone=$.session.get('phone')
var  pic=$.session.get('pic')
var token=$.session.get('token')
var parpam ={}	
			
if(token=="null")
{	
	$(location).attr('href', '/');					
}

function walletInfo()
{
	
	parpam.userId = uid;
	$.ajax({
		type: 'Get',
		url: url+"/ty/incrementHf/wallet/walletInfo",
		data: parpam,
		headers: {
		  token: token
		},											
		success: function(data){				
			if(data.status=='0000')
			{
				$('#ye').html(data.result.balance);
				$('#ljlqje').html(data.result.amount);
				$('#djje').html(data.result.frozen);
			}
			else
			{
				alert(data.message);
			}
		}		
	});	
}

function bankInfo()
{
	parpam.userId = uid
	$.ajax({
			type: 'Get',
			url: url+"/ty/incrementHf/bank/bankInfo",
			data: parpam,						
			headers: {
			  token: token
			},	
			success: function(data){
				$(".userName").html(data.result.userName)
				$(".idC").html(data.result.idCard)
				$(".bankC").html(data.result.bankCode)
				$(".bankN").html(data.result.bankName)
				$(".bankB").html(data.result.bankBranch)   							
			}
	});	
}

function getToDate(time)
{	
			var data = new Date(time);
			var year = data.getFullYear();  //获取年
			var month = data.getMonth() + 1;    //获取月
			var day = data.getDate(); //获取日
			var hours = data.getHours();
			var minutes = data.getMinutes();
			var seconds = data.getSeconds(); 
			    /**
			     * 与当前时间比较，显示 今天 10:10:10
			     */
			    //var date=new Date();
			    /*if (date.getFullYear()==year&&date.getMonth() + 1==month){
			        if (date.getDate()==day){
			            time = "今天" + " " + hours + ":" + minutes + ":" + seconds;
			            return time;
			        }
			        if ((parseInt(date.getDate())-1)==day){
			            time = "昨天" + " " + hours + ":" + minutes + ":" + seconds;
			            return time;
			        }
			    }*/
			 
		time = year + "/" + month + "/" + day + "/" + " " + hours + ":" + minutes + ":" + seconds;
		return time;
			
}
function isPhoneNo(phone) { 	
 var pattern = /^1[34578]\d{9}$/; 
 return pattern.test(phone); 
}
function checkNumber(obj){ 
     var reg = /^[0-9]+$/; 
      if(obj!=""&&!reg.test(obj)){            
          return false; 
     } 
} 

