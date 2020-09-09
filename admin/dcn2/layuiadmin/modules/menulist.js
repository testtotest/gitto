layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    baseUrl = layui.api.baseUrl;

  i.render({
    elem: "#LAY-app-content-list",
    url: baseUrl + "/ty/heatingAdmin/admin/menuList",
    request: {
      pageName: "pageNo", //页码的参数名称，默认：page
      limitName: "pageSize",
    },
    // where: {
    //   token: sessionStorage.getItem("token")
    // },
    headers: {},
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
          title: "菜单ID",
          minWidth: 20,
        },
        {
          field: "name",
          title: "菜单名称",
          minWidth: 150,
        },
        {
          field: "menuUrl",
          title: "菜单地址",
          minWidth: 350,
        },
        {
          field: "icon",
          title: "icon",
          // minWidth: 50,
          align: "center",
        },
        {
          field: "remark",
          title: "备注",
          // minWidth: 50,
          align: "center",
        },
        {
          field: "pId",
          title: "父菜单ID",
          minWidth: 50,
          sort: !0,
          align: "center",
        },
        {
          title: "操作",
          minWidth: 50,
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
    }),
    t("menulist", {});
});
