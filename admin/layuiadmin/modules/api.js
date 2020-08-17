layui.define(["table", "form", "util"], function (t) {
  var e = layui.$,
    i = layui.table,
    n = layui.form,
    util = layui.util,
    // baseUrl = "http://172.17.3.235:8839/kstp/qrcodeadmin"; //测试  废弃

    // baseUrl = "http://172.17.6.138:8839/kstp/qrcodeadmin"; //开发
    //baseUrl = "http://172.26.68.222:8839/kstp/qrcodeadmin"; //于乐



    baseUrl = "http://101.200.129.62:8082", //测试

    //  baseUrl = "http://123.166.198.210:8080"
    // baseUrl = "http://101.200.129.62:8080",
    imgurl = "http://101.200.129.62:8082/ty/incrementAdmin/operator/step/stepList";
  imgBaseUrl = "http://101.200.129.62:8082/tyapplet/",
  	mUrl="/ty/incrementAdmin",
    t("api", {
      baseUrl,
      imgurl,
      imgBaseUrl,
	  mUrl
    });
});