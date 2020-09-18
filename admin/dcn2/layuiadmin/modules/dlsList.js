layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // setter = layui.setter,
    baseapi = layui.api.baseUrltest;
  //satrt
  i.render({
    elem: "#LAY-app-content-list",
    url: baseapi + "/ty/heatingAdmin/admin/agentDetail/query",
    request: {
      pageName: "pageNo", //页码的参数名称，默认：page
      limitName: "pageSize",
      // token:sessionStorage.getItem("token")
    },
    headers: {},
    where: {},
    parseData: function (res) {		
		
      if (res.status == "4030" || res.status == "4031") {
        layer.msg(res.message);
        setTimeout(function () {
          window.parent.location.href = "../../user/login.html";
        }, 2000);
        return false;
      }
      if (res.status != "0000") {
        layer.msg(res.message);
        return false;
      }    
	  console.log(res.result.list)
      return {
        code: res.status, //解析接口状态
        msg: res.message, //解析提示文本
        count: res.result.count, //解析数据长度
        data: res.result.list, //解析数据列表
      };
    },
    cols: [
      [
		  {
		    type: "checkbox",         
		  },
      {
        field: "contract",
        width: 140,
        title: "合同图片",
        templet: function (d) {
      	  return '<div><img onclick=imgb("https://img.tongyunzn.com/tyapplet/'+d.contract+'") src="https://img.tongyunzn.com/tyapplet/'+d.contract+'"/></div>'
        }
      },
        {
          field: "id",
          width: 70,
          title: "ID",
          sort: !0,
        },
		// {
		//   field: "",
		//   title: "",
		//   width: 100,		  
		//   templet: function (d) { 
		// 		if(d.childList.length>0)
		// 		{
		// 			return  '<button lay-event="detailInfo" type="button" class="layui-btn  layui-btn-xs ">查看</button>';
		// 		}
		// 		else
		// 		{
		// 			return "暂无";
		// 		}
		//   },
		// },
		{
		  field: "pid",
		  width: 120,
		  title: "父级代理ID"
		}, 
		{
		  field: "name",
		  width: 120,
		  title: "代理名称"
		}, 
		{
		  field: "phone",
		  width: 120,
		  title: "代理手机号"
		}, 
		{
		  field: "idcard",
		  minWidth: 200,
		  title: "代理身份证号",		
		}, 
		{
		  field: "bankCard",
		  width: 200,
		  title: "代理银行卡号",		
		}, 
		{
		  field: "email",
		  width: 200,
		  title: "代理邮箱",		
		},
		 {
		   field: "proxyArea",
		   width: 200,
		   title: "代理区域编号",		
		 }, 
		 {
		         field: "type",
		         title: "代理类型",
		         minWidth: 120,
		         templet: function (d) { 
		       	  if(d.type==1){return '公司'}
				  else if(d.type==2){return '省代'}
				  else if(d.type==3){return '市代'}
				  else if(d.type==4){return '县代'}
		         },
		  },
		 {
			     field: "status",
			     title: "状态",
			     minWidth: 120,
			     templet: function (d) { 
			   	    if(d.status==1){return '启用'}
			      	else if(d.status==2){return '禁用'}			   				 
			     },
		},
		{
		  field: "joinTime",
		  title: "加入时间",
		  width: 200,
		  templet: function (d) {
		    return util.toDateString(d.joinTime, "yyyy-MM-dd HH:mm:ss");
		  },
		},
		{
		  field: "amount",
		  width: 200,
		  title: "进件总金额",		
		}, 			 
      
		
		{
		  title: "操作",
		  minWidth: 250,
		  align: "center",
		  fixed: "right",
		  toolbar: "#table-content-list",
		},	
      ],
    ],

    page: !0,
    limit: 10,
    limits: [10, 15, 20, 25, 30],
    // done : function(res,curr,count){
    //     console.log('res,curr,count',res,curr,count)
    // },
    text: "对不起，加载出现异常！",
  }),
    i.on("tool(LAY-app-content-list)", function (t) {
      var e = t.data;
      // "del" === t.event ? layer.confirm("确定删除此文章？", function (e) {
      //     t.del(), layer.close(e)
      // }) :
      // "edit" === t.event && layer.open({

      // })

      // "total" === t.event && layer.open({

      // })
    }),
    t("dlsList", {});
});
