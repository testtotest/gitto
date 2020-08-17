layui.define([ "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // setter = layui.setter,
    baseapi = layui.api.baseUrl;	
  //satrt
  i.render({
    elem: "#LAY-app-content-list",
    url: baseapi + mUrl+"/operator/step/stepList",
    request: {
      pageName: "pageNo", //页码的参数名称，默认：page
      limitName: "pageSize"
    },
    headers: {},
    where: {
         taskId: sessionStorage.getItem("typeStepId"),
       },
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
      // if (res.result.count == 0) {
      //   //显示无数据提示内容
      //   return {
      //     code: 201,
      //     msg: "未查询到相关数据",
      //   };
      // }
      return {
        code: res.status, //解析接口状态
        msg: res.message, //解析提示文本
        count: res.result.count, //解析数据长度
        data: res.result, //解析数据列表
      };
    },
    cols: [
      [
        // {
        //   type: "checkbox",
        //   fixed: "left"
        // },
		
        {
          field: "id",
          width: 70,
          title: "ID",
          sort: !0,
        },
		{
		  field: "taskId",
		  width: 70,
		  title: "任务id"		 
		},
		{
		  field: "stepNumber",
		  width: 150,
		  title: "步骤序号"
		},
		{
		  field: "detailed",
		  width: 150,
		  title: "说明"
		}, 			
		// {
		//   field: "create_time",
		//   title: "发布时间",
		//   minWidth: 160,
		//   templet: function (d) {
		//     return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
		//   },
		// }, 				 
        {
          field: "type",
          title: "类型",
          width: 100,
          templet: function (d) { 
        	  if(d.type==1){return '任务步骤'}
			  else if(d.type==2){return '任务示例'}			  
          },
        },
		{
		  title: "操作",
		  minWidth: 100,
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
     
    }),
    t("stepList", {});
});
