//var url='http://101.200.129.62:8082'
var url='https://messionty.tongyunzn.com'
var imgUrl='https://img.tongyunzn.com/increment/'
var imgUrls='https://img.tongyunzn.com/increment/user/'
var parpam ={}
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
				if(data.status=="4030")
				{
					noto()
				}
				else
				{
					alert(data.message)
				}
			}
		}		
	});	
}
function noto()
{	
	$(location).attr('href', '/');
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
				 month = month > 9 ? month : "0" + month;
				      day = day > 9 ? day : "0" + day;
				 hours = hours > 9 ? hours : "0" + hours;
				      minutes = minutes > 9 ? minutes : "0" + minutes;
				      seconds = seconds > 9 ? seconds : "0" + seconds;
			// if(minutes>=1 && minutes<=9)
			//     minutess='0'+minutes
			// 	else
			// 	minutess=minutes
		time = year + "-" + month + "-" + day + "" + " " + hours + ":" + minutes + ":" + seconds;
		
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

function daojishi(seconds,obj){
	if (seconds > 1){
		  
	        seconds--;
		  
	        $(obj).html(seconds+"秒后重新获取 ").attr("onclick", false).css("color","#000000");//禁用按钮
		   
	        // 定时1秒调用一次
		  
	        setTimeout(function(){
		  
	            daojishi(seconds,obj);
		  
	        },1000);
		  
	    }else{
		  
	        $(obj).html("获取验证码").attr("onclick","gcode(this)").css("color","#4C7EE5");	
					   
		  
	    }  
}

