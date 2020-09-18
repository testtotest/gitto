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
    url: baseapi + "/ty/heatingAdmin/order/operator/orderList",
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
    cols: [
      [
		{
		  type: "checkbox",         
		},
     {
       field: "orderId",
       title: "Id",
       width: 70,
     },
	 {
	   field: "userId",
	   title: "用户id",
	   width: 70,
	 },
	   {
	     field: "userName",
	     title: "姓名",
	     width: 130,
	   },
	   {
	     field: "phone",
	     title: "电话",
	     width: 130,
	   },
	   {
	     field: "address",
	     title: "安装地址",
	     width: 300,
	   },
	   {
	     field: "goods",
	     title: "购买的设备",
	     width: 270,
	   },
	   {
	     field: "payTime",
	     title: "支付时间",
	     width: 170,
	     templet: function (d) {
	       return util.toDateString(d.payTime, "yyyy-MM-dd HH:mm:ss");
	     },
	   },
	   {
	     field: "status",
	     title: "跟进状态",
	     width: 100,
	     templet: function (d) { 
	   	         if(d.status==1){return '<button class="layui-btn layui-btn-primary layui-btn-xs">处理中</button>'}
	   	    else if(d.status==2){return '<button class="layui-btn layui-btn layui-btn-xs">预支付成功</button>'}
	   		else if(d.status==3){return '<button class="layui-btn layui-btn-normal layui-btn-xs">预支付失败</button>'} 
	   		else if(d.status==4){return '<button class="layui-btn layui-btn-warm layui-btn-xs">付款成功</button>'} 
	   		else if(d.status==5){return '<button class="layui-btn layui-btn-danger layui-btn-xs">付款失败</button>'} 
	   		else if(d.status==6){return '<button class="layui-btn layui-btn-disabled layui-btn-xs">撤销订单</button>'}		  
	     },
	   },
	   {
	     field: "createTime",
	     title: "下单时间",
	     width: 170,
	     templet: function (d) {
	       return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
	     },
	   },
	  
	   {
	     field: "totalFee",
	     title: "交易金额",
	     width: 100,
		 templet: function (d) {
             return d.totalFee+"元"		 	   		  
		 },
	   }, 
	   {
	     field: "transactionId",
	     title: "微信订单号",
	     width: 270,
	   }, 
	   {
	     field: "outTradeNo",
	     title: "商户订单号",
	     width: 270
	   }, 
	   {
	     field: "orderType",
	     title: "订单类型",
	     width: 120,
	     templet: function (d) { 
	   	    if(d.orderType==1){return '单品购买'}
	   	    else if(d.orderType==2){return '购物车购买'}
	   		  
	     },
	   },
	    {
	      field: "agent",
	      title: "代理",
	      width: 170,
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
    t("ordersList", {});
});
