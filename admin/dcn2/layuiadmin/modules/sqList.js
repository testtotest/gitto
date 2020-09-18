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
    url: baseapi + "/ty/heatingAdmin/admin/newclothes/query",
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
        field: "photo",
        width: 150,
        title: "图片",
        templet: function (d) {
      	  return '<div><img onclick=imgb("https://img.tongyunzn.com/tyapplet/'+d.companyPhoto+'") src="https://img.tongyunzn.com/tyapplet/'+d.companyPhoto+'"/></div>'
        }
      },
        {
          field: "id",
          width: 70,
          title: "ID",
          sort: !0,
        },
		      {
		        field: "type",
		        title: "用户类型",
		        minWidth: 120,
		        templet: function (d) { 
		      	  if(d.type==1){return '个人'}else if(d.type==2){return '企业'}
		        },
		      },
		{
		  field: "region",
		  width: 120,
		  title: "县级ID"
		}, 
		{
		  field: "address",
		  width: 120,
		  title: "详细地址"
		}, 
		{
		  field: "powerConsumptionTime",
		  width: 120,
		  title: "预计用电时间"
		},
		 {
		   field: "equityProveType",
		   width: 120,
		   title: "产权证明类型"
		 }, 
		 {
		   field: "documentType",
		   width: 170,
		   title: "产权人证件类型/法人证件类型"
		 }, 
		 {
		   field: "ownerName",
		   width: 170,
		   title: "产权人姓名/法人姓名"
		 }, 
		 {
		   field: "ownerIdCard",
		   width: 270,
		   title: "产权人身份证号码 / 法人身份证号码"
		 }, 
		 {
		   field: "applicantPhone",
		   width: 120,
		   title: "申请人手机号"
		 }, 
	{
	  field: "typeProof",
	  width: 170,
	  title: "企业主体证明类型"
	}, 
	{
	  field: "enterpriseName",
	  width: 170,
	  title: "企业名称"
	}, 
	
		// {
		//   field: "createTime",
		//   title: "创建时间",
		//   minWidth: 200,
		//   templet: function (d) {
		//     return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
		//   },
		// }, 						 

		
		{
		  title: "操作",
		  minWidth: 200,
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
    t("sqList", {});
});
