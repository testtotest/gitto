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
    //  https://xny.tongyunzn.com/ty/heatingAdmin/admin/examine/withdrawApplyList?pageNo=1&pageSize=12
    url: baseapi + "/ty/heatingAdmin/admin/reward/rewardTypeList",
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
        // {
        //   type: "checkbox",
        //   fixed: "left"
        // },
        {
          field: "id",
          width: 80,
          title: "ID",
          sort: !0,
        },
        {
          field: "sequence",
          title: "序号",
          minWidth: 80,
        },
        {
          field: "description",
          title: "播报内容",
          minWidth: 500,
        },
        {
          field: "type",
          title: "是否优先",
          minWidth: 100,
          templet: function (d) {
            if(d.type==1){
              return '<button type="button" class="layui-btn  layui-btn-xs ">优先</button>'
            }else{
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-disabled  ">一般</button>'
            }
          }
        },
        // {
        //   field: "createTime",
        //   title: "创建时间",
        //   minWidth: 170,
        //   templet: function (d) {
        //     return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
        //   },
        // },

        // {
        //   field: "status",
        //   minWidth: 80,
        //   title: "状态",
        //   templet: function (d) {
        //     if (d.status == "1") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-normal">已启用</button>';
        //     } else if (d.status == "2") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-disabled  ">已停用</button>';
        //     }
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
    t("broadcastList", {});
});
