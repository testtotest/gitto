layui.define(["table", "form", "util", "api"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    baseurl = layui.api.baseUrl;
  //获取渠道列表
  var channelList = function (el) {
    $.ajax({
      type: "POST",
      url: baseurl + "/qrcode/admin/channel/queryChannel",
      data: {
        pageSize: 1000,
      },
      headers: {
        token: sessionStorage.getItem("token"),
      },
      dataType: "json",
      success: function (data) {
        if (data.status == "4031") {
          layer.msg(data.message);
          setTimeout(function () {
            window.parent.parent.location.href = "../../user/login.html";
          }, 2000);
          return false;
        }
        if (data.status != 0000) {
          layer.msg(data.message);
        }
        var data = data.result.list;
        if (!data.length) {
          layer.msg("暂无渠道来源");
          return false;
        }
        var cidTempSeach = '<option value="">请选择</option>';
        cidTempSeach += '<option value="">全部</option>';
        for (var i = 0; i < data.length; i++) {
          cidTempSeach +=
            '<option value="' +
            data[i].channelNo +
            '">' +
            data[i].channelName +
            "</option>";
        }
        $(el).html(cidTempSeach);
        layui.use("form", function () {
          var form = layui.form;
          form.render();
        });
      },
    });
  };
  t("function", { channelList });
});
