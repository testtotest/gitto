layui.define(function (e) {
  layui.use(["admin", "carousel", "api"], function () {
    var e = layui.$,
      t = (layui.admin, layui.carousel),
      a = layui.element,
      baseapi = layui.api.baseUrl,
      i = layui.device();
    e(".layadmin-carousel").each(function () {
      var a = e(this);
      t.render({
        elem: this,
        width: "100%",
        arrow: "none",
        interval: a.data("interval"),
        autoplay: a.data("autoplay") === !0,
        trigger: i.ios || i.android ? "click" : "hover",
        anim: a.data("anim"),
      });
    }),
      a.render("progress");
  }),
    layui.use(["carousel", "echarts", "api"], function () {
      var baseUrl = layui.api.baseUrl;
      $.ajax({
        type: "get",
        url: baseUrl + "/ty/heatingAdmin/admin/data/newUserDate",
        data: {},
        headers: {
          token: sessionStorage.getItem("token"),
        },
        // contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
          // console.log(
          //   "TTTTAAP________",
          //   data.result["日期"],
          //   data.result["用户增量"],
          //   data.result["有效用户增量"]
          // );
		console.log(data.result["用户增量"])
          var e = layui.$,
            t = layui.carousel,
            a = layui.echarts,
            i = [],
            l = [
              {               
                color: ["#f60516", "#3805f6"],
                tooltip: { trigger: "axis" },
                lineStyle: { color: "#808bc6" },
                legend: { data: ["用户增量", "有效用户增量"] },
                xAxis: [
                  {
                    type: "category",
                    boundaryGap: !1,
                    data: ["2020-09-20", "2020-09-21", "2020-09-22", "2020-09-23", "2020-09-24", "2020-09-25", "2020-09-26"],
                  },
                ],
                yAxis: [{ type: "value" }],
                series: [
                  {
                    name: "用户增量",
                    type: "line",
                    smooth: !0,
                    //  itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [103,120,140,163,124,145,200],
                  },
                  {
                    name: "有效用户增量",
                    type: "line",
                    smooth: !0,
                    //  itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: [53,20,40,63,24,45,130],
                  },
                ],
              },
            ];
          (n = e("#LAY-home-u").children("div")),
            (r = function (e) {
              (i[e] = a.init(n[e], layui.echartsTheme)),
                i[e].setOption(l[e]),
                (window.onresize = i[e].resize);
            });
          if (n[0]) {
            r(0);
            var o = 0;
            t.on("change(LAY-home-u)", function (e) {
              r((o = e.index));
            }),
              layui.admin.on("side", function () {
                setTimeout(function () {
                  r(o);
                }, 300);
              }),
              layui.admin.on("hash(tab)", function () {
                layui.router().path.join("") || r(o);
              });
          }
        },
      });
    }),
    layui.use("table", function () {
      var e = (layui.$, layui.table);
    }),
    e("homeLinea", {});
});
