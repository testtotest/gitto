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
    url: baseapi + "/ty/heatingAdmin/admin/cases/queryAll",
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
      if (res.result.count == 0) {
        //显示无数据提示内容
        return {
          code: 201,
          msg: "未查询到相关数据",
        };
      }
      return {
        code: res.status, //解析接口状态
        msg: res.message, //解析提示文本
        count: res.result.count, //解析数据长度
        data: res.result.list, //解析数据列表
      };
    },
	cellMinWidth: 200,
    cols: [
      [
		  {
		    type: "checkbox",         
		  },
      {
        field: "carouselImg",
        width: 150,
        title: "案例封面",
        templet: function (d) {
      	  return '<div><img onclick=imgb("https://img.tongyunzn.com/tyapplet/'+d.image+'") src="https://img.tongyunzn.com/tyapplet/'+d.image+'"/></div>'
        }
      },
      
		{
		  field: "title",
		  width: 300,		   
		  title: "案例标题"
		}, 
		
					 
        {
          field: "isShow",
          title: "是否显示",        
          templet: function (d) { 
        	  if(d.isShow==1){return '显示'}else if(d.isShow==2){return '隐藏'}
          },
        },
		
		{
		  title: "操作",
		  width: 400,
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
    t("casesList", {});
});
