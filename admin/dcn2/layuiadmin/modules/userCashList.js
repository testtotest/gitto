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
    url: baseapi + "/ty/heatingAdmin/admin/equip/waterList",
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
          sort: !0,
        },
        {
          field: "userId",
          width: 100,
          title: "用户ID",
          sort: !0,
        },
        {
          field: "phone",
          title: "手机号",
          minWidth: 120,
        },

        {
          field: "createTime",
          title: "注册时间",
          minWidth: 180,
          templet: function (d) {
            return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
          },
        },

        {
          field: "type",
          minWidth: 200,
          title: "类型",
          templet: function (d) {
            if (d.type == "1") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-normal">1级返利</button>';
            } else if (d.type == "2") {
              return '<button type="button" class="layui-btn  layui-btn-xs ">2级返利</button>';
            } else if (d.type == "3") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-danger">提现</button>';
            }
            //  else if (d.type == "4") {
            //   return '<button type="button" class="layui-btn  layui-btn-xs" style="background:purple">四标</button>';
            // }
          },
        },

        // {
        //   field: "jumpType",
        //   title: "跳转类型",
        //   minWidth: 120,
        //   templet: function(d) {
        //     if (d.jumpType == "1") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-normal">原生</button>';
        //     } else if (d.jumpType == "2") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs ">H5</button>';
        //     }
        //   }
        // },
        {
          field: "money",
          title: "金额(元)",
          template: function (d) {
            if (d.money > 0) {
              var money = d.money / 100;
              return money.tofixed(2);
            } else {
              return "0";
            }
          },
          minWidth: 150,
        },

        {
          field: "applicationNo",
          title: "申请编号",
          minWidth: 200,
        },
        {
          field: "name",
          title: "昵称",
          minWidth: 120,
        },
        // {
        //   field: "id",
        //   title: "流水id",
        //   minWidth: 120,
        // },
        // {
        //   field: "balance",
        //   title: "余额 (元)",
        //   minWidth: 150,
        //   templet: function (d) {
        //     return util.numberFormat(d.balance / 100, 3);
        //   },
        // },
        // {
        //   field: "regType",
        //   title: "注册方式",
        //   minWidth: 100,
        //   templet: function (d) {
        //     if (d.regType == "0") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs ">app注册</button>';
        //     } else if (d.regType == "1") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-normal  ">邀请注册</button>';
        //     }
        //   },
        // },
        // {
        //   field: "invCode",
        //   title: "邀请码",
        //   minWidth: 120,
        // },
        // {
        //   field: "statusApi",
        //   title: "状态",
        //   minWidth: 100,
        //   templet: function (d) {
        //     if (d.statusApi == "1") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs">正常</button>';
        //     } else if (d.statusApi == "2") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-disabled">已冻结</button>';
        //     }
        //   },
        // },
        // {
        //   title: "操作",
        //   minWidth: 120,
        //   align: "center",
        //   fixed: "right",
        //   toolbar: "#table-content-list",
        // },
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
    t("userCashList", {});
});
