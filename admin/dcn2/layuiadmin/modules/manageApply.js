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
    url: baseapi + "/ty/heatingAdmin/admin/examine/reviewedApplyList",
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
		  field: "type",
		  title: "申请类型",
		  minWidth: 110,
		  templet: function (d) {
		    if (d.type == "1") {
		      return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-primary ">自己安装</button>';
		    } else if (d.type == "2") {
		      return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg">推荐他人</button>';		   
			} else if (d.type == "3") {
				   return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg">h5申请安装</button>';	
			}	
		  },
		},
        {
          field: "phone",
          title: "安装者手机号",
          minWidth: 120,
        },
        {
          field: "userName",
          title: "安装用户",
          minWidth: 200,
        },
        {
          field: "modelName",
          title: "设备名",
          minWidth: 200,
        },
        {
          field: "power",
          title: "功率(kw)",
          minWidth: 100,
        },
        {
          field: "partsMoney",
          title: "价格",
          minWidth: 100,
          // templet: function (d) {
          //   return util.numberFormat(d.partsMoney / 100, 3);
          // },
        },
        {
          field: "heatingArea",
          title: "供暖面积(平方米)",
          minWidth: 120,
        },
        {
          field: "fromPhone",
          title: "推荐人手机号",
          minWidth: 100,
        },
        {
          field: "model",
          title: "设备类型",
          minWidth: 100,
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
          field: "remark",
          title: "备注",
          minWidth: 100,
        },
        {
          field: "auditStatus",
          title: "当前状态",
          minWidth: 200,
          templet: function (d) {
            if (d.auditStatus == "1") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-primary ">已申请</button>';
            } else if (d.auditStatus == "2") {
              return '<button type="button" class="layui-btn  layui-btn-xs ">电业局已通过</button>';
            } else if (d.auditStatus == "3") {
              return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg ">已分配安装人员</button>';
            } else if (d.auditStatus == "4") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-danger">审核驳回</button>';
            } else if (d.auditStatus == "5") {
              return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-disabled">完成</button>';
            }
          },
        },

        // {
        //   field: "applicationNo",
        //   title: "申请编号",
        //   minWidth: 200,
        // },
        // {
        //   field: "userId",
        //   title: "用户ID",
        //   minWidth: 120,
        // },

        // {
        //   field: "equipmentCode",
        //   title: "设备唯一编码",
        //   minWidth: 200,
        // },

        // {
        //   field: "useUserId",
        //   title: "安装用户ID",
        //   minWidth: 200,
        // },

        // {
        //   field: "partsId",
        //   title: "配件ID",
        //   minWidth: 100,
        // },

        // {
        //   field: "name",
        //   title: "被邀请人昵称",
        //   minWidth: 100,
        // },

        // {
        //   field: "admId",
        //   title: "审核员工ID",
        //   minWidth: 100,
        // },
        // {
        //   field: "type",
        //   title: "推荐类型",
        //   minWidth: 100,
        //   templet: function (d) {
        //     if (d.type == "1") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs layui-btn-primary ">自己安装</button>';
        //     } else if (d.type == "2") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg">推荐他人</button>';
        //     }else if (d.type == "5") {
        //       return '<button type="button" class="layui-btn  layui-btn-xs light-pink-bg">H5</button>';
        //     }
        //   },
        // },

        // {
        //   field: "useUserId",
        //   title: "安装用户id",
        //   minWidth: 100,
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
      "del" === t.event
        ? layer.confirm("确定删除此文章？", function (e) {
            t.del(), layer.close(e);
          })
        : "edit" === t.event && layer.open({});

      "total" === t.event && layer.open({});
    }),
    t("manageApply", {});
});
