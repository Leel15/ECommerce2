"use strict";
$(document).ready(function () {
  initCardChart();
  initCardChart2();
  smallLineWidget();
  smallBarWidget();
  smallGaugeWidget();
  //   initChartReport1();
  //   initChartReport2();
  amChartLineWidget();
});

var barChartData = [];
for (var i = 0; i <= 20; i += 1) {
  barChartData.push([i, parseInt(Math.random() * 30)]);
}
Morris.Area({
  element: "area_chart",
  data: [
    { w: "2011 Q1", x: 2, y: 0, z: 0 },
    { w: "2011 Q2", x: 50, y: 15, z: 5 },
    { w: "2011 Q3", x: 15, y: 50, z: 23 },
    { w: "2011 Q4", x: 45, y: 12, z: 7 },
    { w: "2011 Q5", x: 20, y: 32, z: 55 },
    { w: "2011 Q6", x: 39, y: 67, z: 20 },
    { w: "2011 Q7", x: 20, y: 9, z: 5 },
  ],
  xkey: "w",
  ykeys: ["x", "y", "z"],
  labels: ["X", "Y", "Z"],
  pointSize: 0,
  lineWidth: 0,
  resize: true,
  fillOpacity: 0.8,
  behaveLikeLine: true,
  gridLineColor: "#e0e0e0",
  hideHover: "auto",
  lineColors: ["rgb(97, 97, 97)", "rgb(0, 206, 209)", "rgb(255, 117, 142)"],
});
Morris.Line({
  element: "project_line",
  data: [
    {
      period: "2008",
      iphone: 35,
      ipad: 67,
      itouch: 15,
    },
    {
      period: "2009",
      iphone: 140,
      ipad: 189,
      itouch: 67,
    },
    {
      period: "2010",
      iphone: 50,
      ipad: 80,
      itouch: 22,
    },
    {
      period: "2011",
      iphone: 180,
      ipad: 220,
      itouch: 76,
    },
    {
      period: "2012",
      iphone: 130,
      ipad: 110,
      itouch: 82,
    },
    {
      period: "2013",
      iphone: 80,
      ipad: 60,
      itouch: 85,
    },
    {
      period: "2014",
      iphone: 78,
      ipad: 205,
      itouch: 135,
    },
    {
      period: "2015",
      iphone: 180,
      ipad: 124,
      itouch: 140,
    },
    {
      period: "2016",
      iphone: 105,
      ipad: 100,
      itouch: 85,
    },
    {
      period: "2017",
      iphone: 210,
      ipad: 180,
      itouch: 120,
    },
  ],
  xkey: "period",
  ykeys: ["iphone", "ipad", "itouch"],
  labels: ["iPhone", "iPad", "iPod Touch"],
  pointSize: 3,
  fillOpacity: 0,
  pointStrokeColors: ["#222222", "#cccccc", "#f96332"],
  behaveLikeLine: true,
  gridLineColor: "#e0e0e0",
  lineWidth: 2,
  hideHover: "auto",
  lineColors: ["#222222", "#20B2AA", "#f96332"],
  resize: true,
});

function initCardChart2() {
  //Chart Bar
  $(".chart.chart-bar-2").sparkline(undefined, {
    type: "bar",
    barColor: "#fff",
    negBarColor: "#fff",
    barWidth: "4px",
    height: "45px",
  });
  $(".chart.chart-bar2").sparkline(undefined, {
    type: "bar",
    barColor: "#54B253",
    negBarColor: "#000",
    barWidth: "4px",
    height: "65px",
  });

  //Chart Pie
  $(".chart.chart-pie-2").sparkline(undefined, {
    type: "pie",
    height: "45px",
    sliceColors: [
      "rgba(255,255,255,0.70)",
      "rgba(255,255,255,0.85)",
      "rgba(255,255,255,0.95)",
      "rgba(255,255,255,1)",
    ],
  });

  //Chart Line
  $(".chart.chart-line-2").sparkline(undefined, {
    type: "line",
    width: "60px",
    height: "45px",
    lineColor: "#fff",
    lineWidth: 1.3,
    fillColor: "rgba(0,0,0,0)",
    spotColor: "rgba(255,255,255,0.40)",
    maxSpotColor: "rgba(255,255,255,0.40)",
    minSpotColor: "rgba(255,255,255,0.40)",
    spotRadius: 3,
    highlightSpotColor: "#fff",
  });
}

function initCardChart() {
  //Chart Bar
  $(".chart.chart-bar").sparkline(
    [6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5, 6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5],
    {
      type: "bar",
      barColor: "#FF9800",
      negBarColor: "#fff",
      barWidth: "4px",
      height: "45px",
    }
  );

  //Chart Pie
  $(".chart.chart-pie").sparkline([30, 35, 25, 8], {
    type: "pie",
    height: "45px",
    sliceColors: ["#65BAF2", "#F39517", "#F44586", "#6ADF42"],
  });

  //Chart Line
  $(".chart.chart-line").sparkline([9, 4, 6, 5, 6, 4, 7, 3], {
    type: "line",
    width: "60px",
    height: "45px",
    lineColor: "#65BAF2",
    lineWidth: 2,
    fillColor: "rgba(0,0,0,0)",
    spotColor: "#F39517",
    maxSpotColor: "#F39517",
    minSpotColor: "#F39517",
    spotRadius: 3,
    highlightSpotColor: "#F44586",
  });

  // live chart
  var mrefreshinterval = 500; // update display every 500ms
  var lastmousex = -1;
  var lastmousey = -1;
  var lastmousetime;
  var mousetravel = 0;
  var mpoints = [];
  var mpoints_max = 30;
  $("html").on("mousemove", function (e) {
    var mousex = e.pageX;
    var mousey = e.pageY;
    if (lastmousex > -1) {
      mousetravel += Math.max(
        Math.abs(mousex - lastmousex),
        Math.abs(mousey - lastmousey)
      );
    }
    lastmousex = mousex;
    lastmousey = mousey;
  });
  var mdraw = function () {
    var md = new Date();
    var timenow = md.getTime();
    if (lastmousetime && lastmousetime != timenow) {
      var pps = Math.round((mousetravel / (timenow - lastmousetime)) * 1000);
      mpoints.push(pps);
      if (mpoints.length > mpoints_max) mpoints.splice(0, 1);
      mousetravel = 0;
      $("#liveChart").sparkline(mpoints, {
        width: mpoints.length * 2,
        height: "45px",
        tooltipSuffix: " pixels per second",
      });
    }
    lastmousetime = timenow;
    setTimeout(mdraw, mrefreshinterval);
  };
  // We could use setInterval instead, but I prefer to do it this way
  setTimeout(mdraw, mrefreshinterval);
}

function smallLineWidget() {
  am5.ready(function () {
    var root = am5.Root.new("smallLineWidget");

    root.setThemes([am5themes_Animated.new(root)]);

    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"],
    });

    var data = [
      {
        date: "2012-07-27",
        value: 13,
      },
      {
        date: "2012-07-28",
        value: 11,
      },
      {
        date: "2012-07-29",
        value: 15,
      },
      {
        date: "2012-07-30",
        value: 16,
      },
      {
        date: "2012-07-31",
        value: 18,
      },
      {
        date: "2012-08-01",
        value: 13,
      },
      {
        date: "2012-08-02",
        value: 22,
      },
      {
        date: "2012-08-03",
        value: 23,
      },
      {
        date: "2012-08-04",
        value: 20,
      },
      {
        date: "2012-08-05",
        value: 17,
      },
      {
        date: "2012-08-06",
        value: 16,
      },
      {
        date: "2012-08-07",
        value: 18,
      },
      {
        date: "2012-08-08",
        value: 21,
      },
      {
        date: "2012-08-09",
        value: 26,
      },
    ];

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    var easing = am5.ease.linear;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 70,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    xAxis
      .get("renderer")
      .labels.template.adapters.add("fill", (fill, target) => {
        return "#9aa0ac";
      });
    yAxis
      .get("renderer")
      .labels.template.adapters.add("fill", (fill, target) => {
        return "#9aa0ac";
      });

    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        connect: false,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}",
        }),
      })
    );

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true,
    });

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"],
    });

    series.data.setAll(data);

    series.bullets.push(function () {
      var circle = am5.Circle.new(root, {
        radius: 4,
        fill: root.interfaceColors.get("background"),
        stroke: series.get("fill"),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    chart.appear(1000, 100);
  });
}

function smallBarWidget() {
  am5.ready(function () {
    var root = am5.Root.new("smallBarWidget");

    var myTheme = am5.Theme.new(root);

    myTheme.rule("Grid", ["base"]).setAll({
      strokeOpacity: 0.1,
    });

    root.setThemes([am5themes_Animated.new(root), myTheme]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 0,
      })
    );

    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });
    yRenderer.grid.template.set("location", 1);

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "country",
        renderer: yRenderer,
      })
    );

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, {
          visible: true,
          strokeOpacity: 0.1,
          minGridDistance: 80,
        }),
      })
    );

    xAxis
      .get("renderer")
      .labels.template.adapters.add("fill", (fill, target) => {
        return "#9aa0ac";
      });
    yAxis
      .get("renderer")
      .labels.template.adapters.add("fill", (fill, target) => {
        return "#9aa0ac";
      });
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        sequencedInterpolation: true,
        categoryYField: "country",
      })
    );

    var columnTemplate = series.columns.template;

    columnTemplate.setAll({
      draggable: true,
      cursorOverStyle: "pointer",
      tooltipText: "drag to rearrange",
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      strokeOpacity: 0,
    });
    columnTemplate.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    columnTemplate.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    columnTemplate.events.on("dragstop", () => {
      sortCategoryAxis();
    });

    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        var dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }

    // Axis sorting
    function sortCategoryAxis() {
      // Sort by value
      series.dataItems.sort(function (x, y) {
        return y.get("graphics").y() - x.get("graphics").y();
      });

      var easing = am5.ease.out(am5.ease.cubic);

      // Go through each axis item
      am5.array.each(yAxis.dataItems, function (dataItem) {
        // get corresponding series item
        var seriesDataItem = getSeriesItem(dataItem.get("category"));

        if (seriesDataItem) {
          // get index of series data item
          var index = series.dataItems.indexOf(seriesDataItem);

          var column = seriesDataItem.get("graphics");

          // position after sorting
          var fy =
            yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
            column.height() / 2;

          // set index to be the same as series data item index
          if (index != dataItem.get("index")) {
            dataItem.set("index", index);

            // current position
            var x = column.x();
            var y = column.y();

            column.set("dy", -(fy - y));
            column.set("dx", x);

            column.animate({ key: "dy", to: 0, duration: 600, easing: easing });
            column.animate({ key: "dx", to: 0, duration: 600, easing: easing });
          } else {
            column.animate({ key: "y", to: fy, duration: 600, easing: easing });
            column.animate({ key: "x", to: 0, duration: 600, easing: easing });
          }
        }
      });

      // Sort axis items by index.
      // This changes the order instantly, but as dx and dy is set and animated,
      // they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }

    // Set data
    var data = [
      {
        country: "USA",
        value: 875,
      },
      {
        country: "India",
        value: 1882,
      },
      {
        country: "Japan",
        value: 428,
      },
      {
        country: "Germany",
        value: 1322,
      },
    ];

    yAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
}

function smallGaugeWidget() {
  am5.ready(function () {
    var root = am5.Root.new("smallGaugeWidget");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(60),
      })
    );

    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series.labels.template.setAll({
      textType: "circular",
      centerX: 0,
      centerY: 0,
      forceHidden: true,
    });

    series.data.setAll([
      { value: 10, category: "One" },
      { value: 9, category: "Two" },
      { value: 6, category: "Three" },
    ]);

    series.appear(1000, 100);
  }); // end am5.ready()
}

function amChartLineWidget() {
  am5.ready(function () {
    var root = am5.Root.new("amChartLineWidget");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 60,
      minorGridEnabled: true,
    });

    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 30 },
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
        extraMin: 0.01,
        extraMax: 0.01,
        tooltipLocation: 0,
      })
    );

    var yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set("forceHidden", true);

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
      })
    );

    xAxis
      .get("renderer")
      .labels.template.adapters.add("fill", (fill, target) => {
        return "#9aa0ac";
      });
    yAxis
      .get("renderer")
      .labels.template.adapters.add("fill", (fill, target) => {
        return "#9aa0ac";
      });

    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
      })
    );
    cursor.lineY.set("visible", false);

    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "timestamp",
        locationX: 0,
        seriesTooltipTarget: "bullet",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.bullets.push(function () {
      var circleTemplate = am5.Template.new({
        radius: 6,
        templateField: "bulletSettings",
        fill: series.get("fill"),
        strokeWidth: 2,
        stroke: root.interfaceColors.get("background"),
      });

      var circle = am5.Circle.new(root, {}, circleTemplate);

      return am5.Bullet.new(root, {
        sprite: circle,
        locationX: 0,
      });
    });

    function createGuide(value, text, dashArray) {
      var guideDataItem = yAxis.makeDataItem({ value: value });
      yAxis.createAxisRange(guideDataItem);
      guideDataItem.get("grid").setAll({
        forceHidden: false,
        strokeOpacity: 0.2,
        strokeDasharray: dashArray,
      });

      var label = guideDataItem.get("label");
      label.setAll({
        text: text,
        isMeasured: false,
        centerY: am5.p100,
      });

      label.adapters.add("x", function (x) {
        return chart.plotContainer.width();
      });

      chart.events.on("boundschanged", function () {
        label.set("x", label.get("x"));
      });
    }

    createGuide(98.8, "LCL", [2, 2]);
    createGuide(100.1, "CL");
    createGuide(101.2, "UCL", [2, 2]);

    var data = [
      {
        timestamp: new Date(2020, 0, 1, 22, 30).getTime(),
        value: 99.71,
      },
      {
        timestamp: new Date(2020, 0, 1, 23, 0).getTime(),
        value: 99.13,
      },
      {
        timestamp: new Date(2020, 0, 1, 23, 30).getTime(),
        value: 98.5,
      },
      {
        timestamp: new Date(2020, 0, 2, 0, 0).getTime(),
        value: 101,
      },
      {
        timestamp: new Date(2020, 0, 2, 0, 30).getTime(),
        value: 99.45,
      },
      {
        timestamp: new Date(2020, 0, 2, 1, 0).getTime(),
        value: 100.9,
      },
      {
        timestamp: new Date(2020, 0, 2, 1, 30).getTime(),
        value: 100.39,
      },
      {
        timestamp: new Date(2020, 0, 2, 2, 0).getTime(),
        value: 101.1,
      },
      {
        timestamp: new Date(2020, 0, 2, 2, 30).getTime(),
        value: 101.45,
      },
      {
        timestamp: new Date(2020, 0, 2, 3, 0).getTime(),
        value: 101.15,
      },
      {
        timestamp: new Date(2020, 0, 2, 3, 30).getTime(),
        value: 100.5,
      },
      {
        timestamp: new Date(2020, 0, 2, 4, 0).getTime(),
        value: 101.55,
        bulletSettings: { fill: am5.color("#f0c803") },
      },
      {
        timestamp: new Date(2020, 0, 2, 4, 30).getTime(),
        value: 101.7,
        bulletSettings: { fill: am5.color("#970505") },
      },
      {
        timestamp: new Date(2020, 0, 2, 5, 0).getTime(),
        value: 100.5,
        bulletSettings: { fill: am5.color("#f0c803") },
      },
      {
        timestamp: new Date(2020, 0, 2, 5, 30).getTime(),
        value: 100.92,
        bulletSettings: { fill: am5.color("#f0c803") },
      },
      {
        timestamp: new Date(2020, 0, 2, 6, 0).getTime(),
        value: 102.2,
        bulletSettings: { fill: am5.color("#970505") },
      },
    ];

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
}
