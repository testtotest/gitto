layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // setter = layui.setter,
    imgBaseUrl = layui.api.imgBaseUrl,
    baseapi = layui.api.baseUrl;
  //satrt
  i.render({
    elem: "#LAY-app-content-list",
    url: baseapi + "/ty/heatingAdmin/admin/equip/equipmentTypeList",
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

        // 5、添加时间
        // 6、设备缩略图
        // 7、状态
        {
          field: "id",
          width: 80,
          title: "ID",
          sort: !0,
        },
        {
          field: "model",
          title: "产品类型",
          align: "center",
          minWidth: 150,
        },
        {
          field: "stock",
          title: "库存",
          align: "center",
          minWidth: 150,
        },
        {
          field: "characteristic",
          title: "设备特点",
          align: "center",
          minWidth: 300,
        },
        {
          field: "createTime",
          title: "添加时间",
          minWidth: 180,
          templet: function (d) {
            return util.toDateString(d.createTime, "yyyy-MM-dd HH:mm:ss");
          },
        },
        {
          field: "photo2",
          title: "设备缩略图",
          minWidth: 150,
          templet: function (d) {
            if (d.photo2) {
              let imgUrl = imgBaseUrl + d.photo2;
              return `<img src= "${imgUrl}" />`;
            } else {
              return "";
            }
          },
        },
        {
          field: "status",
          title: " 状态",
          minWidth: 150,
          templet: function (d) {
            if (d.status == "1") {
              return '<button type="button" class="layui-btn  layui-btn-xs ">使用中</button>';
            } else if (d.status == "2") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-disabled  ">下架</button>';
            }
          },
        },

        {
          field: "rebateOne",
          title: "一级返利(%)",
          minWidth: 150,
          // templet: function (d) {
          //   return util.numberFormat(d.rebateOne / 100, 3);
          // },
        },
        // {
        //   field: "rebateTwo",
        //   title: "二级返 (元)",
        //   minWidth: 150,
        //   templet: function (d) {
        //     return util.numberFormat(d.rebateTwo / 100, 3);
        //   },
        // },

        // {
        //   field: "photo1",
        //   title: "设备照片",
        //   minWidth: 150,
        //   templet: function (d) {
        //     if (d.photo1) {
        //       let imgUrl = imgBaseUrl + d.photo1;
        //       return `<img src= "${imgUrl}" />`;
        //     } else {
        //       return "";
        //     }
        //   },
        // },

        // {
        //   field: "photo3",
        //   title: "设备照片备用",
        //   align: "center",
        //   minWidth: 150,
        //   templet: function (d) {
        //     if (d.photo3) {
        //       let imgUrl = imgBaseUrl + d.photo3;
        //       return `<img src= "${imgUrl}" />`;
        //     } else {
        //       return "";
        //     }
        //   },
        // },
        // {
        //   field: "name",
        //   title: "设备名称",
        //   align: "center",
        //   minWidth: 150,
        // },
        // {
        //   field: "description",
        //   title: "描述",
        //   align: "center",
        //   minWidth: 150,
        // },

        // {
        //   field: "prince",
        //   title: "价格 (元)",
        //   minWidth: 150,
        //   templet: function (d) {
        //     return util.numberFormat(d.prince / 100, 3);
        //   },
        // },

        {
          title: "操作",
          minWidth: 400,
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
    t("equipmentList", {});
});
