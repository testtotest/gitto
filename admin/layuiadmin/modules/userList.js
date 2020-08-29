layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // setter = layui.setter,
    baseapi = layui.api.baseUrl;
  //satrt
  i.render({
    elem: "#LAY-app-content-list",
    url: baseapi + mUrl+"/operator/user/userList",
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
        data: res.result.list, //解析数据列表
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
          width: 50,
          title: "ID",
          sort: !0,
        },       
        {
          field: "phone",
          title: "手机号",
          width: 120,
        },      
        {
          field: "amount",
          title: "获得金额",
          width:90,
          templet: function (d) {
            return d.amount+"元";
          },
        },
        {
          field: "taskCount",
          title: "完成任务",
          width:90,
          // templet: function (d) {
          //   return util.numberFormat(d.frozen / 100, 3);
          // },
        },
        {
          field: "status",
          title: "状态",
          width: 100,
		  templet: function (d) { 
			  if(d.status==1){return '正常'}else if(d.status==2){return '不可登陆'}else if(d.status==3){return '不可领任务'}
		  },
        },
        {
          field: "createTime",
          title: "注册时间",
          Width: 160,
          templet: function (d) {
            return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
          },
        },       
        {
          title: "操作",
          minWidth: 120,
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
    t("userList", {});
});
