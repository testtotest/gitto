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
    url: baseapi + "/ty/heatingAdmin/admin/equip/equipmentList",
    request: {
      pageName: "pageNo", //页码的参数名称，默认：page
      limitName: "pageSize",
      // token:sessionStorage.getItem("token")
    },
    headers: {},
    where: {},
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
        // 1、Id
        // 2、用户名称
        // 3、用户手机号
        // 4、地址
        // 5、安装时间
        // 6、设备名称（中文）
        // 7、功率KW
        // 8、供暖面积
        // 9、购买金额
        // 10、返利金额
        // 11、推荐人id
        // 12、推荐人名称
        // 13、推荐人手机号
        // 14、推荐类型
        {
          field: "id",
          width: 80,
          title: "ID",
          sort: !0,
        },
        {
          field: "admId",
          title: "审核员工编号",
          minWidth: 80,
        },
        {
          field: "code",
          title: "设备唯一编码",
          minWidth: 150,
        },
        {
          field: "address",
          title: "地址",
          minWidth: 150,
        },
        {
          field: "applicationNo",
          title: "申请编号",
          minWidth: 150,
        },
        {
          field: "fromUserId",
          title: "推荐用户id",
          minWidth: 150,
        },
        {
          field: "userPhone",
          title: "使用者手机号",
          minWidth: 150,
        },
        {
          field: "fromUserPhone",
          title: "推荐用户手机号",
          minWidth: 150,
        },
        {
          field: "type",
          title: "推荐类型",
          minWidth: 100,
          templet: function (d) {
            if (d.type == "1") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-primary ">自己安装</button>';
            } else if (d.type == "2") {
              return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg">推荐他人</button>';
            }
          },
        },
        {
          field: "userId",
          title: "使用用户id",
          minWidth: 150,
        },
        {
          field: "money",
          title: "返利金额(元)",
          minWidth: 150,
          templet: function (d) {
            return util.numberFormat(d.money / 100, 3);
          },
        },
        {
          field: "prince",
          title: "购买金额(元)",
          minWidth: 150,
          templet: function (d) {
            return util.numberFormat(d.prince / 100, 3);
          },
        },
        {
          field: "createTime",
          title: "安装时间",
          minWidth: 180,
          templet: function (d) {
            return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
          },
        },
        {
          field: "model",
          title: "设备型号",
          minWidth: 150,
        },
        {
          field: "power",
          title: "功率(kw)",
          minWidth: 150,
        },
        {
          field: "heatingArea",
          title: "供暖面积(平方米)",
          minWidth: 150,
        },
        {
          field: "partsId",
          title: "配件id",
          minWidth: 150,
        },
        // {
        //   title: "操作",
        //   minWidth: 200,
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
    }),
    t("abledEquipmentList", {});
});
