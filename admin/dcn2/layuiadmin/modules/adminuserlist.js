layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // setter = layui.setter,
    baseurl = layui.api.baseUrl;

  i.render({
    elem: "#LAY-app-content-list",
    url: baseurl + "/ty/heatingAdmin/admin/sysUserList",
    request: {
      pageName: "pageNo", //页码的参数名称，默认：page
      limitName: "pageSize",
    },
    headers: {},
    where: {
      addType: "",
      //   token: sessionStorage.getItem("token"),
      //   level: ""
    },
    parseData: function (res) {
      //res 即为原始返回的数据

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
          title: "ID",
          minWidth: 100,
        },
        // {
        //     field: "entype",
        //     title: "账号类型",
        //     templet:function(d){if(d.entype ==1){return '<span class="layui-btn layui-btn-xs">商户</span>'}else if(d.entype ==2){return '<span class="layui-btn layui-btn-primary layui-btn-xs">管理员</span>'}}
        // },
        {
          field: "name",
          title: "员工姓名",
          minWidth: 100,
        },
        {
          field: "account",
          title: "员工账号",
          minWidth: 150,
        },
        {
          field: "email",
          title: "email",
          minWidth: 150,
        },
        {
          field: "phone",
          title: "员工手机号",
          minWidth: 150,
        },
        {
          field: "remark",
          title: "备注",
          minWidth: 100,
        },
        {
          field: "roleNameList",
          title: "所属角色",
          minWidth: 300,
        },
        // {
        //     field: "sex",
        //     title: "性别",
        //     templet:function(d){if(d.sex ==1){return '<span class="layui-btn layui-btn-xs">男</span>'}else if(d.sex ==2){return '<span class="layui-btn layui-btn-primary layui-btn-xs">女</span>'}},
        //     // minWidth: 300
        // },
        {
          field: "createTime",
          title: "创建时间",
          templet: function (d) {
            if (d.createTime) {
              return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
            } else {
              return "/";
            }
          },
          minWidth: 150,
        },
        {
          field: "status",
          title: "状态",
          templet: function (d) {
            if (d.status == 1) {
              return '<button class="layui-btn layui-btn-xs">正常</button>';
            } else if (d.status == 2) {
              return '<button class="layui-btn layui-btn-xs  layui-btn-disabled">已停用</button>';
            }
          },
          minWidth: 100,
        },
        {
          title: "操作",
          minWidth: 260,
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
    t("adminuserlist", {});
});
