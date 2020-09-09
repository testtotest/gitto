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
    url: baseapi + "/ty/heatingAdmin/admin/examine/withdrawApplyList",
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
          width: 100,
          title: "ID",
          // fixed: "left",
          sort: !0,
        },
        {
          field: "userId",
          title: "提现用户id",
          minWidth: 100,
        },
        {
          field: "admId",
          title: "审核员工id",
          minWidth: 200,
        },
        {
          field: "name",
          title: "用户昵称",
          minWidth: 100,
        },
        {
          field: "phone",
          title: "提现用户手机号",
          minWidth: 120,
        },
        {
          field: "money",
          title: "提现金额(元)",
          templet: function (d) {
            return util.numberFormat(d.money / 100, 3);
          },
          minWidth: 120,
        },
        {
          field: "auditStatus",
          title: "当前状态",
          minWidth: 200,
          templet: function (d) {
            if (d.auditStatus == "1") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-primary ">未审核</button>';
            } else if (d.auditStatus == "2") {
              return '<button type="button" class="layui-btn  layui-btn-xs ">审核通过</button>';
            } else if (d.auditStatus == "3") {
              return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg ">审核驳回</button>';
            }
          },
        },
        {
          field: "createTime",
          title: "申请时间",
          minWidth: 180,
          templet: function (d) {
            return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
          },
        },
        {
          field: "auditTime",
          title: "审核时间",
          minWidth: 180,
          templet: function (d) {
            return util.toDateString(d.auditTime, "yyyy-MM-dd HH:mm:ss");
          },
        },
        {
          field: "applicationNo",
          title: "申请编号",
          minWidth: 200,
        },
        {
          field: "position",
          title: "提现位置",
          minWidth: 100,
          templet: function (d) {
            if (d.position == "1") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-primary ">提现到银行卡</button>';
            } else if (d.position == "2") {
              return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg">零钱</button>';
            }
          },
        },
        {
          field: "remark",
          title: "审核失败原因",
          minWidth: 100,
        },
        {
          field: "userName",
          title: "提现姓名",
          minWidth: 100,
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
      "del" === t.event
        ? layer.confirm("确定删除此文章？", function (e) {
            t.del(), layer.close(e);
          })
        : "edit" === t.event && layer.open({});

      "total" === t.event && layer.open({});
    }),
    t("cashApplylist", {});
});
