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
        url: baseUrl + "/ty/heatingAdmin/admin/data/equipmentSalesDate",
        data: {},
        headers: {
          token: sessionStorage.getItem("token"),
        },
        // contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
          var e = layui.$,
            t = layui.carousel,
            a = layui.echarts,
            i = [],
            l = [
              {
               
                tooltip: { trigger: "axis" },
                legend: { data: ["设备售卖(台)", "设备申请量"] },
                xAxis: [
                  {
                    type: "category",
                    boundaryGap: !1,
                    data: data.result["日期"],
                  },
                ],
                yAxis: [{ type: "value" }],
                series: [
                  {
                    name: "设备售卖(台)",
                    type: "line",
                    smooth: !0,
                    //  itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: data.result["设备"]["设备售卖(台)"],
                  },
                  {
                    name: "设备申请量",
                    type: "line",
                    smooth: !0,
                    //  itemStyle: { normal: { areaStyle: { type: "default" } } },
                    data: data.result["设备"]["设备申请量"],
                  },
                ],
              },
            ];
          (n = e("#LAY-index-dataview").children("div")),
            (r = function (e) {
              (i[e] = a.init(n[e], layui.echartsTheme)),
                i[e].setOption(l[e]),
                (window.onresize = i[e].resize);
            });
          if (n[0]) {
            r(0);
            var o = 0;
            t.on("change(LAY-index-dataview)", function (e) {
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
    e("sellLine", {});
});
