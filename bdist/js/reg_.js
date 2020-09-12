$(document).ready(function(){
$(".btn-login").click(function(){
	
	
	var str = '';
	if($.trim($('#inputM').val()).length == 0) {
	  str += '手机号码没有输入\n';
	  $('#inputM').focus();
	 }else {
		if(isPhoneNo($.trim($('#inputM').val()))== false){
			   str += '手机号码不正确\n';
			   $('#inputM').focus();
		}
	 }
	 if($.trim($('#inputP').val()).length == 0 ) {
	       str += '密码没有输入\n';	  
	  }
	  if(str != '') {	    
	       swal({
	        title: "",
	        text: str,
	        type: "",	       
	        confirmButtonColor: "#FFCB4F",
	        confirmButtonText: "知道了",
	        closeOnConfirm: false
	       }
	      );
		  return false;
	  }
	  else
	  {
		  
		   var parpam ={}
		   parpam.phone = $.trim($('#inputM').val());
		   parpam.password = $.trim($('#inputP').val());	
		   
		   $.ajax({
		   		type: 'POST',
		   		url: "/loginForm",
		   		data: parpam,		   		
		   		dataType: "json",
		   		success: function(data){	
					if(data.status=="0000")
					{
						if($(".rep").prop("checked")==true)
						{							
							$.cookie('isrep', 1, { expires: 1 });
							$.cookie('phone', $.trim($('#inputM').val()), { expires: 1 });	
							$.cookie('pwd',   $.trim($('#inputP').val()), { expires: 1 });			
						}
						else
						{
							$.cookie('phone', null);	
							$.cookie('isrep', 0);								
						}
					   	$.session.set('uid', data.result.id);
					   	$.session.set('phone', data.result.phone);
					   	$.session.set('token', data.result.token);	
					   	$.session.set('pic', data.result.headPortrait);		
						$(location).attr('href', 'set');
					}	
					else
						{
							swal({
							  title: "",
							  text: data.message,
							  type: "",	       
							  confirmButtonColor: "#FFCB4F",
							  confirmButtonText: "知道了",
							  closeOnConfirm: false
							 }
							);
						}				   			
		   		}
		   });
	   }	
		
  })
  ///////////////////////////////////////////////////////////////////forget b
  $(".btn-forget").click(function(){
  	 var str = '';
  	 if($.trim($('#inputM').val()).length == 0) {
  	 	  str += '手机号码没有输入\n';
  	 	  $('#inputM').focus();
  	  }else {
  	 	if(isPhoneNo($.trim($('#inputM').val()))== false){
  	 		   str += '手机号码不正确\n';
  	 		   $('#inputM').focus();
  	 	}
  	  }
  	  
  	   if($.trim($('#inputP').val()).length == 0 || $.trim($('#inputPs').val()).length == 0) {
  	       str += '密码没有输入\n';	  
  	   }
  	   if(str != '') {
  	 	  swal({
  	 	    title: "",
  	 	    text: str,
  	 	    type: "",	       
  	 	    confirmButtonColor: "#FFCB4F",
  	 	    confirmButtonText: "知道了",
  	 	    closeOnConfirm: false
  	 	   }
  	 	  );
  	 	  return false;
  	   }
  	   else
  	   {
  	 	  var parpam ={}
  	 	  parpam.captcha=$.trim($('#inputC').val());
  	 	  parpam.phone = $.trim($('#inputM').val());
  	 	  parpam.newPassword = $.trim($('#inputPs').val());		 
  	 	  $.ajax({
  	 	  			type: 'POST',
  	 	  			url: url+"/ty/incrementHf/user/resetPassword",
  	 	  			data: JSON.stringify(parpam),	
  	 	  			contentType: "application/json",	
  	 	  			//dataType: "json",
  	 	  			success: function(data){
  	 	  				if(data.status=="0000")
  	 					{
  	 						$(location).attr('href', '/');
  	 					}
  	 					else
  	 					{
  	 						 swal(data.message);
  	 					}
  	 	  			}
  	 	  });
  	   }
  })
  ///////////////////////////////////////////////////////////////////forget e
  if($.cookie('isrep')==1)
  {
  	
  	$('#inputM').val($.cookie('phone')).css({"color":"#CCCCCC"});
  	
  	$('#inputP').attr("type","password").val($.cookie('pwd')).css({"color":"#CCCCCC"});;
  	$('.rep').prop('checked',true);
  	
  }
  
 
  
  
});

