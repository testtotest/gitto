layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,   
    imgBaseUrl = layui.api.imgBaseUrl,
    baseapi = layui.api.baseUrl;
	var ii=1
    $(".layui-btn.layuiadmin-btn-list").on("click", function() {			    
    	var tables = $('.table');
    	var addtr = $('<div style="border-bottom: 1px solid #eee;padding-right: 12px;margin-bottom: 10px;padding-bottom: 10px;"><div class="layui-col-md6"><div class="site-text site-block" ><div class="layui-form-item" ><label class="layui-form-label">规格型号<span class="red">*</span></label><div class="layui-input-block"><input type="text" name="power"  required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input power'+ii+'" ></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block"><div class="layui-form-item"><label class="layui-form-label">价格(元)<span class="red">*</span></label><div class="layui-input-block"><input type="text" name="money"  required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input money'+ii+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block" ><div class="layui-form-item"><label class="layui-form-label">标题小标签</label><div class="layui-input-block"><input type="text" name="titleLabel"  placeholder="请输入标题" autocomplete="off" class="layui-input titleLabel'+ii+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block"><div class="layui-form-item"><label class="layui-form-label">供暖面积<span class="red">*</span></label><div class="layui-input-block"><input type="text" name="heatingArea" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input heatingArea'+ii+'"></div></div></div></div><div class="layui-form-item-a" style="padding-left: 50px;"><input type="button" class="layui-btn layui-btn-normal layuiadmin-app-form-submit-a" data-rowid='+ii+++'   value="保存" /><input type="button" class="layui-btn layuiadmin-app-form-submit-del"   value="删除"/></div><div class="n-c"></div></div>');				
    	addtr.appendTo(tables);    	
    });
	
	//删除配件
	  $(document).on("click",".layuiadmin-app-form-submit-del", function() {
		 
		   var id = $(this).data("id");
		   var _this=$(this);
		   layer.confirm('确定删除吗？', function(index){			
		   layer.close(layer.index);  _this.parent().parent().remove(); 
		   if(id)
		   {
			   var param = {}			 
			   param.partsId = id
			   var subUrl = '/ty/heatingAdmin/manager/equip/delEquipmentParts'
			   $.ajax({
			     		type: "POST",
			     		url: baseapi+subUrl,
			     		data: JSON.stringify(param),
			     		contentType: "application/json",
			     		headers: {
			     				token: sessionStorage.getItem("token")
			     		},
			     					dataType: "json",
			     					success: function (data) {
			     						if (data.status == "0000") {
			     						  layer.msg(data.message);					  						 
			     						} else if (data.status == "4031") {
			     						  layer.msg(data.message);
			     						  setTimeout(function () {
			     						    window.parent.parent.location.href = '../../user/login.html';
			     						  }, 2000)
			     						} else {
			     						  layer.msg('失败' + data.message)
			     						}
			     								 
			     		},
			   });
		   }
		    });
	  });	
	 //删除柱数
	  $(document).on("click",".layuiadmin-btn-del", function() {		   
	 	    
			var id = $(this).data("id");
			$(this).parent().remove();
			if(id)
			{
				
						   var param = {}			 
						   param.partsId = id
						   var subUrl = '/ty/heatingAdmin/manager/equip/delColumnInventory'
						   $.ajax({
						     		type: "POST",
						     		url: baseapi+subUrl,
						     		data: JSON.stringify(param),
						     		contentType: "application/json",
						     		headers: {
						     				token: sessionStorage.getItem("token")
						     		},
						     					dataType: "json",
						     					success: function (data) {
						     						if (data.status == "0000") {
						     						  layer.msg(data.message);					  						 
						     						} else if (data.status == "4031") {
						     						  layer.msg(data.message);
						     						  setTimeout(function () {
						     						    window.parent.parent.location.href = '../../user/login.html';
						     						  }, 2000)
						     						} else {
						     						  layer.msg('失败' + data.message)
						     						}
						     								 
						     		},
						   });
			}			  
	  });
	   //添加改配件
	   n.on("submit(layuiadmin-app-form-submit-a)", function (t) { 
		   var field = t.field;
		   field.typeId=$("#id").val();	
		   var pleng=$(".powerss").length+3;
		  
		  // field.stock=0;
		   var subUrl = "/ty/heatingAdmin/manager/equip/upEquipmentParts";	  
		  
		   $.ajax({
		     type: "POST",
		     url: baseapi + subUrl,
		     data: JSON.stringify(field),
		     headers: {
		       token: sessionStorage.getItem("token"),
		     },
		     contentType: "application/json;charset=utf-8",
		     //  dataType: "json",
		     success: function (data) {
		       if (data.status == "0000") {				 
		         //layer.msg(data.message);
				 if($("#category").val()==3)
				 {
					 $("#tb").show()
				 }
				 ///////////////////////
				 $("#power").val("");
				  $("#money").val("");
				  $("#titleLabel").val("");
				  $("#heatingArea").val("");
				 
				 var tables = $('.table');
				 var addtr = $('<div style="border-bottom: 1px solid #eee;padding-right: 12px;margin-bottom: 10px;padding-bottom: 10px;"><div class="layui-col-md6"><div class="site-text site-block" ><div class="layui-form-item" ><label class="layui-form-label">规格型号<span class="red">*</span></label><div class="layui-input-block"><input value="'+data.result+'" type="hidden" class="powerss id'+pleng+'"/><input type="text" name="power"  required  lay-verify="required" placeholder="请输入" value="'+field.power+'" autocomplete="off" class="layui-input power'+pleng+'" ></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block"><div class="layui-form-item"><label class="layui-form-label">价格(元)<span class="red">*</span></label><div class="layui-input-block"><input type="text" value="'+field.money+'" name="money"  required  lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input money'+pleng+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block" ><div class="layui-form-item"><label class="layui-form-label">标题小标签</label><div class="layui-input-block"><input value="'+field.titleLabel+'" type="text" name="titleLabel"  placeholder="请输入" autocomplete="off" class="layui-input titleLabel'+pleng+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block"><div class="layui-form-item"><label class="layui-form-label">供暖面积<span class="red">*</span></label><div class="layui-input-block"><input type="text" value="'+field.heatingArea+'" name="heatingArea" required  lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input heatingArea'+pleng+'"></div></div></div></div><div class="layui-form-item-a" style="padding-left: 50px;"><input type="button" class="layui-btn layui-btn-normal layuiadmin-app-form-submit-a" data-rowid='+pleng+'   value="保存" /><input type="button" class="layui-btn layuiadmin-app-form-submit-del" data-id="'+data.result+'"  value="删除"/></div><div class="n-c"></div></div>');				
				 addtr.appendTo(tables);    	
				 ////////////////////////
		         setTimeout(function () {
		           parent.layui.table.reload("LAY-app-content-list"); //重载表格
		           parent.layer.close(index); //再执行关闭
		         }, 1000)
		       } else if (data.status == "4031") {
		         layer.msg(data.message);
		         setTimeout(function () {
		           window.parent.parent.location.href =
		             "../../user/login.html";
		         }, 2000);
		       } else {
		         layer.msg("失败" + data.message);
		       }
		       parent.layer.closeAll("loading");
		     },
		   });
	  });
	  //添柱数
	  $(".layui-btn.layuiadmin-btn-lists").on("click", function() {
		   var tables = $('.addrows');
		   var addtr = $('<div  type="button" class="tag-item layui-btn layui-btn-primary layui-btn-sm"><span><input name="zsPower" id="zsPower" type="text"/></span><i class="layui-icon layui-unselect  layuiadmin-btn-del tag-close layuiadmin-btn-del">ဆ</i></div>');
		   addtr.appendTo(tables);	
	  });
	  n.on('select(category)', function (data) {
	 			  if(data.value==3 && $("#id").val())
	 			  {
	 				  $("#tb").show()
	 			  }
	 			  else
	 			  {
	 				   $("#tb").hide()
	 			  }
	 });
	 
	 //动态修改配件
	 $(document).on("click",".layuiadmin-app-form-submit-a", function() {
		      var rowid = $(this).data("rowid");
			  var typeId=$("#id").val() //设备id	
					
			  var param = {}
			  param.typeId = typeId
			  param.power = $(".power"+rowid).val()	
			  param.heatingArea = $(".heatingArea"+rowid).val()
			  param.money = $(".money"+rowid).val()	
			  param.titleLabel = $(".titleLabel"+rowid).val()
			  if($(".id"+rowid).val())	  
			  param.id = $(".id"+rowid).val()	
			  else
			  param.id = 0
			  var subUrl = "/ty/heatingAdmin/manager/equip/upEquipmentParts";	
			 
			  $.ajax({
			    type: "POST",
			    url: baseapi + subUrl,
			    data: JSON.stringify(param),
			    headers: {
			      token: sessionStorage.getItem("token"),
			    },
			    contentType: "application/json;charset=utf-8",
			    //  dataType: "json",
			    success: function (data) {
			      if (data.status == "0000") {
					  if($("#category").val()==3)
					  {
					  					 $("#tb").show()
					  }
			        layer.msg(data.message);
			        setTimeout(function () {
			          parent.layui.table.reload("LAY-app-content-list"); //重载表格
			          parent.layer.close(index); //再执行关闭
			        }, 1000)
			      } else if (data.status == "4031") {
			        layer.msg(data.message);
			        setTimeout(function () {
			          window.parent.parent.location.href =
			            "../../user/login.html";
			        }, 2000);
			      } else {
			        layer.msg("失败" + data.message);
			      }
			      parent.layer.closeAll("loading");
			    },
			  });
	 		   
	 });
	///////////////////////////////////zspartsId3
	$(document).on("blur",".zsPower", function() {
		 var zid=$(this).data("id");
		 var p=$(this).val();
		
		 if(zid)
		     add_zs($("#id").val(),p,zid)	
	});
	$(document).on("blur","#zsPower", function() {
		 
		  add_zs($("#id").val(),$(this).val(),0)
		  // $('input[name="zsPower"]').each(function (data) {
		  // 	    var zid=$("input[name='zspartsId']").eq(data).val()
		  // 	    var zpower=$("input[name='zsPower']").eq(data).val()
				
		  // 	  if($("input[name='zspartsId']").eq(data).val())
		  // 	      add_zs($("#id").val(),zpower,zid)								   
		  // 	  else
		  // 	      add_zs($("#id").val(),zpower,0)
		  // });	
	});
	function add_zs(typeId,power,eid)
				  {
											  
					  var param = {}
					  param.typeId = typeId
					  param.power = power			 				 
					  param.partsId = eid	
					 
					var subUrl = '/ty/heatingAdmin/manager/equip/upColumnInventory'
										
					$.ajax({
					  		type: "POST",
					  		url: baseapi+subUrl,
					  		data: JSON.stringify(param),
					  		contentType: "application/json",
					  		headers: {
					  				token: sessionStorage.getItem("token")
					  		},
					  					dataType: "json",
					  					success: function (data) {
					  						if (data.status == "0000") {
					  						  layer.msg(data.message);					  						 
					  						} else if (data.status == "4031") {
					  						  layer.msg(data.message);
					  						  setTimeout(function () {
					  						    window.parent.parent.location.href = '../../user/login.html';
					  						  }, 2000)
					  						} else {
					  						  layer.msg('失败' + data.message)
					  						}
					  								 
					  		},
					});
				  }
	
	///////////////////////////////////

	if($("#id").val())
	{
	var paraminfo = {}
	paraminfo.typeId = $("#id").val()
	$.ajax({
		  type: "GET",
		  url: baseapi+ "/ty/heatingAdmin/manager/equip/deviceDetails",
		  data: paraminfo,
		  contentType: "application/json",
		  headers: {
			token: sessionStorage.getItem("token")
		  },
		  dataType: "json",
		  success: function (data) {
				if (data.status == "0000") {
					
					$("#ta").show() 
					   
					   
						selTxt(data.result.equipmentType.category)
					 //    layui.form.render();
						var partsList = data.result.partsList;
						
						 if(partsList.length>0 && data.result.equipmentType.category==3)
						 { 
							 $("#tb").show()
						 }	
						 else
						 {
							 $("#tb").hide()
						 }
						var tabless = $('.table');
						var addtrs ;
						for (var i = 0; i < partsList.length; i++) 				
						{
							var tables = $('.table');
							ii++
							var addtr = $('<div style="border-bottom: 1px solid #eee;padding-right: 12px;margin-bottom: 10px;padding-bottom: 10px;"><div class="layui-col-md6"><div class="site-text site-block" ><div class="layui-form-item" ><label class="layui-form-label">规格型号<span class="red">*</span></label><div class="layui-input-block"><input value="'+partsList[i].id+'" type="hidden" class="powerss id'+ii+'"/><input value="'+partsList[i].power+'" type="text" name="power"  required  lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input power'+ii+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block"><div class="layui-form-item"><label class="layui-form-label">价格(元)<span class="red">*</span></label><div class="layui-input-block"><input value="'+partsList[i].money+'" type="text" name="money"  required  lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input money'+ii+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block" ><div class="layui-form-item"><label class="layui-form-label">标题小标签</label><div class="layui-input-block"><input value="'+partsList[i].titleLabel+'" type="text" name="titleLabel"  placeholder="请输入" autocomplete="off" class="layui-input titleLabel'+ii+'"></div></div></div></div><div class="layui-col-md6"><div class="site-text site-block"><div class="layui-form-item"><label class="layui-form-label">供暖面积<span class="red">*</span></label><div class="layui-input-block"><input value="'+partsList[i].heatingArea+'" type="text" name="heatingArea" required  lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input heatingArea'+ii+'"></div></div></div></div><div class="layui-form-item-a" style="padding-left: 50px;"><input  type="button" class="layui-btn layui-btn-normal layuiadmin-app-form-submit-a" data-rowid='+ii+'   value="保存" /><input type="button" class="layui-btn layuiadmin-app-form-submit-del" data-id="'+partsList[i].id+'"   value="删除"/></div><div class="n-c"></div></div>');				
							addtr.prependTo(tables);    	
						}
						 var tables = $('.addrows');
						 var addtr="" ;
						 var inventoryList = data.result.inventoryList;						
						 for (var i = 0; i < inventoryList.length; i++) {
							 addtr = $('<div type="button" class="tag-item layui-btn layui-btn-primary layui-btn-sm"><span><input name="zspartsId'+inventoryList[i].partsId+'" type="hidden" value="'+inventoryList[i].partsId+'"/><input class="zsPower" data-id="'+inventoryList[i].partsId+'" name="zsPower" type="text" value="'+inventoryList[i].power+'"/></span><i class="layui-icon layui-unselect tag-close layuiadmin-btn-del" data-id="'+inventoryList[i].partsId+'">ဆ</i></div>');
							addtr.appendTo(tables);	
						 }
					
										 
				} else if (data.status == "4031") {
				  layer.msg(data.message);
				  setTimeout(function () {
				    window.parent.parent.location.href = '../../user/login.html';
				  }, 2000)
				} else {
				  layer.msg('失败' + data.message)
				}
			
		  }
	});
	}
	else
	{
		selTxt(0)
	}
	function selTxt(slid)
	{
		 var param = {}
		 param.status = 1
		$.ajax({
			  type: "GET",
			  url: baseapi+ "/ty/heatingAdmin/admin/equip/equipmentBigList",
			  data: param,
			  contentType: "application/json",
			  headers: {
				token: sessionStorage.getItem("token")
			  },
			  dataType: "json",
			  success: function (data) {
				
				  var list=data.result.list
				 
				 var cateTempSeach = '<option value="">请选择</option>'; 			 
				 for (var i = 0; i < data.result.count; i++) {
					cateTempSeach += '<option value="' + list[i].id + '">' + list[i].typeName + '</option>'   
					 if(slid==list[i].id)
					 { $('#category').append('<option selected="selected" value="' + list[i].id + '">' + list[i].typeName + '</option>')}
					 else
					 {
						  $('#category').append('<option  value="' + list[i].id + '">' + list[i].typeName + '</option>')
					 }
					 
				 }	
				
				
			
				layui.use('form', function() {
					var form = layui.form;				
					form.render();
				});
				
			
			  }	  
		});
	}
	/////////////////////////
     t("equipmentForm", {});
});
