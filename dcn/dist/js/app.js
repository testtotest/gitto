var url='http://101.200.129.62:8085'

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
 function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}


