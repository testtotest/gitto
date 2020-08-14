layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // setter = layui.setter,
    baseapi = layui.api.baseUrl;	
  //satrt
   $.ajax({
		type: "GET",
		url: baseapi+mUrl + "/operator/user/userList",
		// data: {
		// 	 userId: e.id,
		// },
		headers: {
			 token: sessionStorage.getItem("token"),
		},
		dataType: "json",
		success: function (data) {
			alert(JSON.stringify(data.result.list));			 
		},
	});
	$.ajax({
			type: "POST",
			url: baseapi+mUrl + "/operator/obf/annouce",
			data: JSON.stringify({"type":"1","content":"test"}),
			contentType: "application/json",
			headers: {
				 token: sessionStorage.getItem("token"),
			},
			dataType: "json",
			success: function (data) {
				alert(data.message);			 
			},
		});
    t("userListTest", {});
});
