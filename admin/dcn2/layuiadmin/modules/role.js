layui.define(["table", "form", "util", "api"], function(t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    baseurl = layui.api.baseUrl;

  i.render({
    elem: "#LAY-user-back-role",
    // url: layui.setter.base + "json/content/list.js",
    //url:baserole+"role/queryRole",
    url: baseurl + "/ty/heatingAdmin/admin/roleList",
    request: {
      pageName: "pageNo", //页码的参数名称，默认：page
      limitName: "pageSize"
    },
    // where:{
    //     token:sessionStorage.getItem("token")
    // },
    headers: {},
    parseData: function(res) {
      if (res.status == "4030" || res.status == "4031") {
        layer.msg(res.message);
        setTimeout(function() {
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
          msg: "未查询到相关数据"
        };
      }
      return {
        code: res.status, //解析接口状态
        msg: res.message, //解析提示文本
        count: res.result.count, //解析数据长度
        data: res.result.list //解析数据列表
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
          title: "角色ID",
          minWidth: 100
        },
        {
          field: "name",
          title: "角色名称",
          minWidth: 100
        },
        {
          title: "操作",
          minWidth: 350,
          align: "center",
          fixed: "right",
          toolbar: "#table-useradmin-admin"
        }
      ]
    ],

    page: !0,
    limit: 10,
    limits: [10, 15, 20, 25, 30],
    text: "对不起，加载出现异常！"
  }),
    i.on("tool(LAY-user-back-role)", function(t) {
      var e = t.data;
    }), //邀请记录end
    t("role", {});
});
