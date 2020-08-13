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
				$(".idC").html(data.result.idCard)
				$(".bankC").html(data.result.bankCode)
				$(".bankN").html(data.result.bankName)
				$(".bankB").html(data.result.bankBranch)   							
			}
	});	
}

