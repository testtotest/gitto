layui.define(["table", "form", "util"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    ajsBaseUrl = layui.api.ajsBaseUrl,
    util = layui.util;
  var $_getUrl = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  };
  var numberFormat = function (number, decimals, dec_point, thousands_sep) {
    //格式化金额
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * */
    number = (number + "").replace(/[^0-9+-Ee.]/g, "");
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
      sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
      dec = typeof dec_point === "undefined" ? "." : dec_point,
      s = "",
      toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return "" + Math.ceil(n * k) / k;
      };
    // console.log("_prec", prec);
    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    var re = /(-?\d+)(\d{3})/;
    // console.log("re", re);
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
      //  console.log("re", re);
    }

    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  };
  //认购明细导入、导入兑付 当前产品成功导入的数量
  //   var exportNum = function(param) {
  //     e.ajax({
  //       type: "get",
  //       //  url: ajsBaseUrl+"/ledger/product/queryBusinessProductPage",
  //       url: ajsBaseUrl + "/ledger/subscrip/productSuccessNum",
  //       data: param,
  //       dataType: "json",
  //       success: function(data) {
  //         if (data.status != "0000") {
  //           layer.msg(data.message);
  //           return false;
  //         }
  //         if (data.status == "0000") {
  //           $("#importNumC").css("display", "block");
  //           $("#importNum")
  //             .val(data.result)
  //             .css("color", "red");
  //         }
  //       }
  //     });
  //   };
  //

  t("helper", { $_getUrl ,numberFormat});
});
