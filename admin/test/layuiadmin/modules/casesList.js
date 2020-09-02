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
        field: "carouselImg",
        width: 100,
        title: "图片",
        templet: function (d) {
      	  return '<img src="https://img.tongyunzn.com/tyapplet/'+d.image+'"/>'
        }
      },
        {
          field: "id",
          width: 70,
          title: "ID",
          sort: !0,
        },
		{
		  field: "title",
		  width: 120,
		  title: "案例标题"
		}, 
		
		{
		  field: "descs",
		  minWidth: 200,
		  title: "案例简介",		
		}, 
		
		{
		  field: "releaseTime",
		  title: "案例发布时间",
		  minWidth: 200,
		  templet: function (d) {
		    return util.toDateString(d.releaseTime, "yyyy-MM-dd HH:mm:ss");
		  },
		},
		{
		  field: "createTime",
		  title: "创建时间",
		  minWidth: 200,
		  templet: function (d) {
		    return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
		  },
		}, 						 
        {
          field: "isShow",
          title: "是否显示",
          minWidth: 120,
          templet: function (d) { 
        	  if(d.isShow==1){return '显示'}else if(d.isShow==2){return '隐藏'}
          },
        },
		
		{
		  title: "操作",
		  minWidth: 300,
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
