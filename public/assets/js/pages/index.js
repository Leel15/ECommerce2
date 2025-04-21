"use strict";
$(function () {
  $("#new-orders").slimscroll({
    height: "450px",
    size: "5px",
  });
  $("#project-details").slimscroll({
    height: "450px",
    size: "5px",
  });

  amChartLineHome();
  amChartCurved();

  initCardChart();
  initLineChart();
  initSalesChart();
  chartdata1();
  chartdata2();
  chartdata3();
});

function amChartLineHome() {
  am5.ready(function () {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("amChartLineHome");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
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

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
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

    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
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

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }); // end am5.ready()
}

function amChartCurved() {
  am5.ready(function () {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("amChartCurvedHome");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 5,
        paddingRight: 5,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 60,
      minorGridEnabled: true,
    });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
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
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
      })
    );

    series.columns.template.setAll({
      width: am5.percent(120),
      fillOpacity: 0.9,
      strokeOpacity: 0,
    });
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.set("draw", function (display, target) {
      var w = target.getPrivate("width", 0);
      var h = target.getPrivate("height", 0);
      display.moveTo(0, h);
      display.bezierCurveTo(w / 4, h, w / 4, 0, w / 2, 0);
      display.bezierCurveTo(w - w / 4, 0, w - w / 4, h, w, h);
    });

    // Set data
    var data = [
      {
        country: "USA",
        value: 2025,
      },
      {
        country: "China",
        value: 1882,
      },
      {
        country: "Japan",
        value: 1809,
      },
      {
        country: "Germany",
        value: 1322,
      },
      {
        country: "UK",
        value: 1122,
      },
      {
        country: "France",
        value: 1114,
      },
      {
        country: "India",
        value: 984,
      },
      {
        country: "Spain",
        value: 711,
      },
      {
        country: "Netherlands",
        value: 665,
      },
      {
        country: "South Korea",
        value: 443,
      },
      {
        country: "Canada",
        value: 441,
      },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
}

function initCardChart() {
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
    }
    lastmousetime = timenow;
    setTimeout(mdraw, mrefreshinterval);
  };
  // We could use setInterval instead, but I prefer to do it this way
  setTimeout(mdraw, mrefreshinterval);
}

function initLineChart() {
  try {
    //line chart
    var ctx = document.getElementById("lineChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          defaultFontFamily: "Poppins",
          datasets: [
            {
              label: "My First dataset",
              borderColor: "rgba(0,0,0,.09)",
              borderWidth: "1",
              backgroundColor: "rgba(0,0,0,.07)",
              data: [22, 44, 67, 43, 76, 45, 12],
            },
            {
              label: "My Second dataset",
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              pointHighlightStroke: "rgba(26,179,148,1)",
              data: [16, 32, 18, 26, 42, 33, 44],
            },
          ],
        },
        options: {
          legend: {
            position: "top",
            labels: {
              fontFamily: "Poppins",
            },
          },
          responsive: true,
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontFamily: "Poppins",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontFamily: "Poppins",
                },
              },
            ],
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function initSalesChart() {
  try {
    //Sales chart
    var ctx = document.getElementById("sales-chart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: "line",
          defaultFontFamily: "Poppins",
          datasets: [
            {
              label: "Foods",
              data: [0, 30, 10, 120, 50, 63, 10],
              backgroundColor: "transparent",
              borderColor: "#222222",
              borderWidth: 2,
              pointStyle: "circle",
              pointRadius: 3,
              pointBorderColor: "transparent",
              pointBackgroundColor: "#222222",
            },
            {
              label: "Electronics",
              data: [0, 50, 40, 80, 40, 79, 120],
              backgroundColor: "transparent",
              borderColor: "#f96332",
              borderWidth: 2,
              pointStyle: "circle",
              pointRadius: 3,
              pointBorderColor: "transparent",
              pointBackgroundColor: "#f96332",
            },
          ],
        },
        options: {
          responsive: true,
          tooltips: {
            mode: "index",
            titleFontSize: 12,
            titleFontColor: "#000",
            bodyFontColor: "#000",
            backgroundColor: "#fff",
            titleFontFamily: "Poppins",
            bodyFontFamily: "Poppins",
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: "Poppins",
            },
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                },
                ticks: {
                  fontFamily: "Poppins",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Value",
                  fontFamily: "Poppins",
                },
                ticks: {
                  fontFamily: "Poppins",
                },
              },
            ],
          },
          title: {
            display: false,
            text: "Normal Legend",
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}
function chartdata1() {
  am5.ready(function () {
    var root = am5.Root.new("chartdata1");

    root.setThemes([am5themes_Animated.new(root)]);

    var series = root.container.children.push(
      am5flow.ChordDirected.new(root, {
        sourceIdField: "from",
        targetIdField: "to",
        valueField: "value",
        sort: "ascending",
      })
    );

    series.links.template.set("fillStyle", "source");

    series.nodes.get("colors").set("step", 2);
    series.nodes.data.setAll([
      { id: "A" },
      { id: "B" },
      { id: "C" },
      { id: "D" },
      { id: "E" },
      { id: "F" },
    ]);

    series.nodes.get("colors").set("step", 2);

    series.bullets.push(function (_root, _series, dataItem) {
      var bullet = am5.Bullet.new(root, {
        locationY: Math.random(),
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: dataItem.get("source").get("fill"),
        }),
      });

      bullet.animate({
        key: "locationY",
        to: 1,
        from: 0,
        duration: Math.random() * 1000 + 2000,
        loops: Infinity,
      });

      return bullet;
    });

    series.nodes.labels.template.setAll({
      textType: "regular",
      fill: root.interfaceColors.get("background"),
      fontSize: "1.1em",
      radius: -5,
    });

    series.nodes.bullets.push(function (_root, _series, dataItem) {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          fill: dataItem.get("fill"),
        }),
      });
    });

    series.children.moveValue(series.bulletsContainer, 0);

    series.data.setAll([
      { from: "A", to: "D", value: 10 },
      { from: "B", to: "C", value: 8 },
      { from: "B", to: "D", value: 4 },
      { from: "B", to: "E", value: 2 },
      { from: "C", to: "A", value: 14 },
      { from: "C", to: "E", value: 4 },
      { from: "E", to: "D", value: 8 },
      { from: "F", to: "A", value: 7 },
      { from: "D", to: "B", value: 2 },
    ]);

    series.appear(1000, 100);
  });
}

function chartdata2() {
  am5.ready(function () {
    var root = am5.Root.new("chartdata2");

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
function chartdata3() {
  am5.ready(function () {
    var root = am5.Root.new("chartdata3");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(20),
        startAngle: -90,
        endAngle: 180,
      })
    );

    // Data
    var data = [
      {
        category: "Type 1",
        value: 80,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(0),
        },
      },
      {
        category: "Type 2",
        value: 35,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(1),
        },
      },
      {
        category: "Type 3",
        value: 92,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(2),
        },
      },
    ];

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
    var cursor = chart.set(
      "cursor",
      am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
      })
    );

    cursor.lineY.set("visible", false);

    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    var xRenderer = am5radar.AxisRendererCircular.new(root, {
      minGridDistance: 50,
    });

    xRenderer.labels.template.setAll({
      radius: 10,
      forceHidden: true,
    });

    xRenderer.grid.template.setAll({
      forceHidden: true,
    });

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20,
    });

    yRenderer.labels.template.setAll({
      centerX: am5.p100,
      fontWeight: "500",
      fontSize: 10,
      templateField: "columnSettings",
    });

    yRenderer.grid.template.setAll({
      forceHidden: true,
    });

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer,
      })
    );

    yAxis.data.setAll(data);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    var series1 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "full",
        categoryYField: "category",
        fill: root.interfaceColors.get("alternativeBackground"),
      })
    );

    series1.columns.template.setAll({
      width: am5.p100,
      fillOpacity: 0.08,
      strokeOpacity: 0,
      cornerRadius: 20,
    });

    series1.data.setAll(data);

    var series2 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "value",
        categoryYField: "category",
      })
    );

    series2.columns.template.setAll({
      width: am5.p100,
      strokeOpacity: 0,
      tooltipText: "{category}: {valueX}%",
      cornerRadius: 20,
      templateField: "columnSettings",
    });

    series2.data.setAll(data);

    // Animate chart and series in
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
}
