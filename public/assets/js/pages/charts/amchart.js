"use strict";
$(function () {
  barChart();
  stackedBarChart();
  lineChart();
  lineWithNagative();
  donutChart();
  pieChart();
  candleStick();
  gaugeWithBands();
  radialLineChart();
  mapBubble();
});
function barChart() {
  am5.ready(function () {
    var root = am5.Root.new("barChart");
    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    );

    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    var xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

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
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
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
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
}
function stackedBarChart() {
  am5.ready(function () {
    var root = am5.Root.new("stackedBarChart");
    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    legend.labels.template.setAll({
      fontSize: 14,
      fontWeight: "600",
      fill: "#9aa0ac",
    });

    var data = [
      {
        year: "2021",
        europe: 2.5,
        namerica: 2.5,
        asia: 2.1,
        lamerica: 1,
        meast: 0.8,
        africa: 0.4,
      },
      {
        year: "2022",
        europe: 2.6,
        namerica: 2.7,
        asia: 2.2,
        lamerica: 0.5,
        meast: 0.4,
        africa: 0.3,
      },
      {
        year: "2023",
        europe: 2.8,
        namerica: 2.9,
        asia: 2.4,
        lamerica: 0.3,
        meast: 0.9,
        africa: 0.5,
      },
    ];
    var xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
      minorGridEnabled: true,
    });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
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
    function makeSeries(name, fieldName, stacked) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          stacked: stacked,
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "year",
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: am5.percent(10),
      });
      series.data.setAll(data);

      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.percent(50),
            centerX: am5.percent(50),
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    makeSeries("Europe", "europe", false);
    makeSeries("North America", "namerica", true);
    makeSeries("Asia", "asia", false);
    makeSeries("Latin America", "lamerica", true);
    makeSeries("Middle East", "meast", true);
    makeSeries("Africa", "africa", true);

    chart.appear(1000, 100);
  }); //
}

function lineChart() {
  am5.ready(function () {
    var root = am5.Root.new("lineChart");

    const myTheme = am5.Theme.new(root);

    myTheme.rule("AxisLabel", ["minor"]).setAll({
      dy: 1,
    });

    myTheme.rule("Grid", ["minor"]).setAll({
      strokeOpacity: 0.08,
    });

    root.setThemes([am5themes_Animated.new(root), myTheme]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
      })
    );

    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
      })
    );
    cursor.lineY.set("visible", false);

    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;

    function generateData() {
      value = Math.round(Math.random() * 10 - 5 + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value,
      };
    }

    function generateDatas(count) {
      var data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 200,
          minorLabelsEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.set("minorDateFormats", {
      day: "dd",
      month: "MM",
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
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
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.bullets.push(function () {
      var bulletCircle = am5.Circle.new(root, {
        radius: 5,
        fill: series.get("fill"),
      });
      return am5.Bullet.new(root, {
        sprite: bulletCircle,
      });
    });

    var data = generateDatas(30);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);
  });
}

function lineWithNagative() {
  am5.ready(function () {
    // Create root and chart
    var root = am5.Root.new("lineWithNagative");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        wheelY: "zoomX",
      })
    );

    // Define data
    var data = generatechartData();
    function generatechartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 150);
      var visits = -40;
      var b = 0.6;
      for (var i = 0; i < 150; i++) {
        var newDate = new Date(firstDate);
        newDate.setHours(0, 0, 0);
        newDate.setDate(newDate.getDate() + i);
        if (i > 80) {
          b = 0.4;
        }
        visits += Math.round((Math.random() < b ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate.getTime(),
          visits: visits,
        });
      }
      return chartData;
    }

    // Create Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 30,
        }),
      })
    );

    // Create X-Axis
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          cellStartLocation: 0.2,
          cellEndLocation: 0.8,
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
    var series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueX.formatDate()}: {valueY}",
          pointerOrientation: "horizontal",
        }),
      })
    );

    series.strokes.template.setAll({
      strokeWidth: 3,
    });

    series.fills.template.setAll({
      fillOpacity: 0.5,
      visible: true,
    });

    series.data.setAll(data);

    // Create axis ranges

    var rangeDataItem = yAxis.makeDataItem({
      value: -1000,
      endValue: 0,
    });

    var range = series.createAxisRange(rangeDataItem);

    range.strokes.template.setAll({
      stroke: am5.color(0xff621f),
      strokeWidth: 3,
    });

    range.fills.template.setAll({
      fill: am5.color(0xff621f),
      fillOpacity: 0.5,
      visible: true,
    });

    // Add cursor
    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
        xAxis: xAxis,
      })
    );

    xAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    yAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );
  }); // end am5.ready()
}

function donutChart() {
  am5.ready(function () {
    var root = am5.Root.new("donutChart");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
        legendLabelText: "{category}",
        legendValueText: "",
      })
    );

    series.labels.template.setAll({
      textType: "circular",
      centerX: 0,
      centerY: 0,
      fill: am5.color(0x9aa0ac),
    });

    series.data.setAll([
      { value: 10, category: "One" },
      { value: 9, category: "Two" },
      { value: 6, category: "Three" },
      { value: 5, category: "Four" },
      { value: 4, category: "Five" },
    ]);

    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );
    legend.labels.template.setAll({
      fontSize: 14,
      fontWeight: "600",
      fill: "#9aa0ac",
    });
    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
  });
}

function pieChart() {
  // Create root and chart
  var root = am5.Root.new("pieChart");

  root.setThemes([am5themes_Animated.new(root)]);

  var chart = root.container.children.push(am5percent.PieChart.new(root, {}));

  // Define data
  var data = [
    {
      country: "France",
      sales: 100000,
    },
    {
      country: "Spain",
      sales: 60000,
    },
    {
      country: "UK",
      sales: 80000,
    },
    {
      country: "Belgium",
      sales: 68000,
    },
    {
      country: "Germany",
      sales: 80000,
    },
    {
      country: "Netherlands",
      sales: 70000,
    },
  ];

  // Create series
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      name: "Series",
      valueField: "sales",
      categoryField: "country",
      alignLabels: false,
    })
  );

  series.data.setAll(data);

  series.labels.template.setAll({
    fontSize: 12,
    text: "{category}",
    textType: "circular",
    inside: true,
    radius: 10,
    fill: am5.color(0xffffff),
  });
}

function candleStick() {
  am5.ready(function () {
    var root = am5.Root.new("candleStick");

    const myTheme = am5.Theme.new(root);

    myTheme.rule("Grid", ["scrollbar", "minor"]).setAll({
      visible: false,
    });

    root.setThemes([am5themes_Animated.new(root), myTheme]);

    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 2000);
      firstDate.setHours(0, 0, 0, 0);
      var value = 1200;
      for (var i = 0; i < 2000; i++) {
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        value += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        var open = value + Math.round(Math.random() * 16 - 8);
        var low = Math.min(value, open) - Math.round(Math.random() * 5);
        var high = Math.max(value, open) + Math.round(Math.random() * 5);

        chartData.push({
          date: newDate.getTime(),
          value: value,
          open: open,
          low: low,
          high: high,
        });
      }
      return chartData;
    }

    var data = generateChartData();

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        groupData: true,
        maxDeviation: 0.5,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          pan: "zoom",
          minorGridEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
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

    var color = root.interfaceColors.get("background");

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.CandlestickSeries.new(root, {
        fill: color,
        calculateAggregates: true,
        stroke: color,
        name: "MDXI",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        openValueYField: "open",
        lowValueYField: "low",
        highValueYField: "high",
        valueXField: "date",
        lowValueYGrouped: "low",
        highValueYGrouped: "high",
        openValueYGrouped: "open",
        valueYGrouped: "close",
        legendValueText:
          "open: {openValueY} low: {lowValueY} high: {highValueY} close: {valueY}",
        legendRangeValueText: "{valueYClose}",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText:
            "open: {openValueY}\nlow: {lowValueY}\nhigh: {highValueY}\nclose: {valueY}",
        }),
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
      })
    );
    cursor.lineY.set("visible", false);

    // Stack axes vertically
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/#Stacked_axes
    chart.leftAxesContainer.set("layout", root.verticalLayout);

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    var scrollbar = am5xy.XYChartScrollbar.new(root, {
      orientation: "horizontal",
      height: 50,
    });
    chart.set("scrollbarX", scrollbar);

    var sbxAxis = scrollbar.chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        groupData: true,
        groupIntervals: [
          {
            timeUnit: "week",
            count: 1,
          },
        ],
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          strokeOpacity: 0,
        }),
      })
    );

    var sbyAxis = scrollbar.chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    var sbseries = scrollbar.chart.series.push(
      am5xy.LineSeries.new(root, {
        xAxis: sbxAxis,
        yAxis: sbyAxis,
        valueYField: "value",
        valueXField: "date",
      })
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = yAxis.axisHeader.children.push(am5.Legend.new(root, {}));

    legend.data.push(series);

    legend.markers.template.setAll({
      width: 10,
    });

    legend.markerRectangles.template.setAll({
      cornerRadiusTR: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusBL: 0,
    });

    // set data
    series.data.setAll(data);
    sbseries.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
}
function gaugeWithBands() {
  am5.ready(function () {
    var root = am5.Root.new("gaugeWithBands");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: 160,
        endAngle: 380,
      })
    );

    var axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -40,
    });

    axisRenderer.grid.template.setAll({
      stroke: root.interfaceColors.get("background"),
      visible: true,
      strokeOpacity: 0.8,
    });

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: -40,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer,
      })
    );

    var axisDataItem = xAxis.makeDataItem({});

    var clockHand = am5radar.ClockHand.new(root, {
      pinRadius: am5.percent(20),
      radius: am5.percent(100),
      bottomWidth: 40,
    });

    var bullet = axisDataItem.set(
      "bullet",
      am5xy.AxisBullet.new(root, {
        sprite: clockHand,
      })
    );

    xAxis.createAxisRange(axisDataItem);

    var label = chart.radarContainer.children.push(
      am5.Label.new(root, {
        fill: am5.color(0xffffff),
        centerX: am5.percent(50),
        textAlign: "center",
        centerY: am5.percent(50),
        fontSize: "3em",
      })
    );

    axisDataItem.set("value", 50);
    bullet.get("sprite").on("rotation", function () {
      var value = axisDataItem.get("value");
      var text = Math.round(axisDataItem.get("value")).toString();
      var fill = am5.color(0x000000);
      xAxis.axisRanges.each(function (axisRange) {
        if (
          value >= axisRange.get("value") &&
          value <= axisRange.get("endValue")
        ) {
          fill = axisRange.get("axisFill").get("fill");
        }
      });

      label.set("text", Math.round(value).toString());

      clockHand.pin.animate({
        key: "fill",
        to: fill,
        duration: 500,
        easing: am5.ease.out(am5.ease.cubic),
      });
      clockHand.hand.animate({
        key: "fill",
        to: fill,
        duration: 500,
        easing: am5.ease.out(am5.ease.cubic),
      });
    });

    setInterval(function () {
      axisDataItem.animate({
        key: "value",
        to: Math.round(Math.random() * 140 - 40),
        duration: 500,
        easing: am5.ease.out(am5.ease.cubic),
      });
    }, 2000);

    chart.bulletsContainer.set("mask", undefined);

    var bandsData = [
      {
        title: "Unsustainable",
        color: "#ee1f25",
        lowScore: -40,
        highScore: -20,
      },
      {
        title: "Volatile",
        color: "#f04922",
        lowScore: -20,
        highScore: 0,
      },
      {
        title: "Foundational",
        color: "#fdae19",
        lowScore: 0,
        highScore: 20,
      },
      {
        title: "Developing",
        color: "#f3eb0c",
        lowScore: 20,
        highScore: 40,
      },
      {
        title: "Maturing",
        color: "#b0d136",
        lowScore: 40,
        highScore: 60,
      },
      {
        title: "Sustainable",
        color: "#54b947",
        lowScore: 60,
        highScore: 80,
      },
      {
        title: "High Performing",
        color: "#0f9747",
        lowScore: 80,
        highScore: 100,
      },
    ];

    am5.array.each(bandsData, function (data) {
      var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

      axisRange.setAll({
        value: data.lowScore,
        endValue: data.highScore,
      });

      axisRange.get("axisFill").setAll({
        visible: true,
        fill: am5.color(data.color),
        fillOpacity: 0.8,
      });

      axisRange.get("label").setAll({
        text: data.title,
        inside: true,
        radius: 15,
        fontSize: "0.9em",
        fill: root.interfaceColors.get("background"),
      });
    });

    // Make stuff animate on load
    chart.appear(1000, 100);
  }); // end am5.ready()
}
function radialLineChart() {
  am5.ready(function () {
    var root = am5.Root.new("radialLineChart");

    root.setThemes([am5themes_Animated.new(root)]);

    var cat = -1;
    var value = 10;

    function generateData() {
      value = Math.round(Math.random() * 10);
      cat++;
      return {
        category: "cat" + cat,
        value: value,
      };
    }

    function generateDatas(count) {
      cat = -1;
      var data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    var cursor = chart.set(
      "cursor",
      am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
      })
    );

    cursor.lineY.set("visible", false);

    var xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({
      radius: 10,
    });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5radar.AxisRendererRadial.new(root, {}),
      })
    );

    for (var i = 0; i < 5; i++) {
      var series = chart.series.push(
        am5radar.RadarColumnSeries.new(root, {
          stacked: true,
          name: "Series " + i,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "category",
        })
      );

      series.set("stroke", root.interfaceColors.get("background"));
      series.columns.template.setAll({
        width: am5.p100,
        strokeOpacity: 0.1,
        tooltipText: "{name}: {valueY}",
      });

      series.data.setAll(generateDatas(12));
      series.appear(1000);
    }

    var data = generateDatas(12);
    xAxis.data.setAll(data);

    chart.appear(1000, 100);
  });
}
function mapBubble() {
  am5.ready(function () {
    var root = am5.Root.new("mapBubble");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada),
    });

    var pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {})
    );
    pointSeries.set("clusteredBullet", function (root) {
      var container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      var circle1 = container.children.push(
        am5.Circle.new(root, {
          radius: 8,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      var circle2 = container.children.push(
        am5.Circle.new(root, {
          radius: 12,
          fillOpacity: 0.3,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      var circle3 = container.children.push(
        am5.Circle.new(root, {
          radius: 16,
          fillOpacity: 0.3,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      var label = container.children.push(
        am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
          populateText: true,
          fontSize: "8",
          text: "{value}",
        })
      );

      container.events.on("click", function (e) {
        pointSeries.zoomToCluster(e.target.dataItem);
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    // Create regular bullets
    pointSeries.bullets.push(function () {
      var circle = am5.Circle.new(root, {
        radius: 6,
        tooltipY: 0,
        fill: am5.color(0xff8c00),
        tooltipText: "{title}",
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    // Set data
    var cities = [
      { title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
      { title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
      { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
      { title: "Sarajevo", latitude: 43.8608, longitude: 18.4214 },
      { title: "Sofia", latitude: 42.7105, longitude: 23.3238 },
      { title: "Zagreb", latitude: 45.815, longitude: 15.9785 },
      { title: "Pristina", latitude: 42.666667, longitude: 21.166667 },
      { title: "Prague", latitude: 50.0878, longitude: 14.4205 },
      { title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
      { title: "Tallinn", latitude: 59.4389, longitude: 24.7545 },
      { title: "Helsinki", latitude: 60.1699, longitude: 24.9384 },
      { title: "Paris", latitude: 48.8567, longitude: 2.351 },
      { title: "Berlin", latitude: 52.5235, longitude: 13.4115 },
      { title: "Athens", latitude: 37.9792, longitude: 23.7166 },
      { title: "Budapest", latitude: 47.4984, longitude: 19.0408 },
      { title: "Reykjavik", latitude: 64.1353, longitude: -21.8952 },
      { title: "Dublin", latitude: 53.3441, longitude: -6.2675 },
      { title: "Rome", latitude: 41.8955, longitude: 12.4823 },
      { title: "Riga", latitude: 56.9465, longitude: 24.1049 },
      { title: "Vaduz", latitude: 47.1411, longitude: 9.5215 },
      { title: "Vilnius", latitude: 54.6896, longitude: 25.2799 },
      { title: "Luxembourg", latitude: 49.61, longitude: 6.1296 },
      { title: "Skopje", latitude: 42.0024, longitude: 21.4361 },
      { title: "Valletta", latitude: 35.9042, longitude: 14.5189 },
      { title: "Chisinau", latitude: 47.0167, longitude: 28.8497 },
      { title: "Monaco", latitude: 43.7325, longitude: 7.4189 },
      { title: "Podgorica", latitude: 42.4602, longitude: 19.2595 },
      { title: "Amsterdam", latitude: 52.3738, longitude: 4.891 },
      { title: "Oslo", latitude: 59.9138, longitude: 10.7387 },
      { title: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
      { title: "Lisbon", latitude: 38.7072, longitude: -9.1355 },
      { title: "Bucharest", latitude: 44.4479, longitude: 26.0979 },
      { title: "Moscow", latitude: 55.7558, longitude: 37.6176 },
      { title: "San Marino", latitude: 43.9424, longitude: 12.4578 },
      { title: "Belgrade", latitude: 44.8048, longitude: 20.4781 },
      { title: "Bratislava", latitude: 48.2116, longitude: 17.1547 },
      { title: "Ljubljana", latitude: 46.0514, longitude: 14.506 },
      { title: "Madrid", latitude: 40.4167, longitude: -3.7033 },
      { title: "Stockholm", latitude: 59.3328, longitude: 18.0645 },
      { title: "Bern", latitude: 46.948, longitude: 7.4481 },
      { title: "Kiev", latitude: 50.4422, longitude: 30.5367 },
      { title: "London", latitude: 51.5002, longitude: -0.1262 },
      { title: "Gibraltar", latitude: 36.1377, longitude: -5.3453 },
      { title: "Saint Peter Port", latitude: 49.466, longitude: -2.5522 },
      { title: "Douglas", latitude: 54.167, longitude: -4.4821 },
      { title: "Saint Helier", latitude: 49.1919, longitude: -2.1071 },
      { title: "Longyearbyen", latitude: 78.2186, longitude: 15.6488 },
      { title: "Kabul", latitude: 34.5155, longitude: 69.1952 },
      { title: "Yerevan", latitude: 40.1596, longitude: 44.509 },
      { title: "Baku", latitude: 40.3834, longitude: 49.8932 },
      { title: "Manama", latitude: 26.1921, longitude: 50.5354 },
      { title: "Dhaka", latitude: 23.7106, longitude: 90.3978 },
      { title: "Thimphu", latitude: 27.4405, longitude: 89.673 },
      { title: "Bandar Seri Begawan", latitude: 4.9431, longitude: 114.9425 },
      { title: "Phnom Penh", latitude: 11.5434, longitude: 104.8984 },
      { title: "Peking", latitude: 39.9056, longitude: 116.3958 },
      { title: "Nicosia", latitude: 35.1676, longitude: 33.3736 },
      { title: "T'bilisi", latitude: 41.701, longitude: 44.793 },
      { title: "New Delhi", latitude: 28.6353, longitude: 77.225 },
      { title: "Jakarta", latitude: -6.1862, longitude: 106.8063 },
      { title: "Teheran", latitude: 35.7061, longitude: 51.4358 },
      { title: "Baghdad", latitude: 33.3157, longitude: 44.3922 },
      { title: "Jerusalem", latitude: 31.76, longitude: 35.17 },
      { title: "Tokyo", latitude: 35.6785, longitude: 139.6823 },
      { title: "Amman", latitude: 31.9394, longitude: 35.9349 },
      { title: "Astana", latitude: 51.1796, longitude: 71.4475 },
      { title: "Kuwait", latitude: 29.3721, longitude: 47.9824 },
      { title: "Bishkek", latitude: 42.8679, longitude: 74.5984 },
      { title: "Vientiane", latitude: 17.9689, longitude: 102.6137 },
      { title: "Beyrouth / Beirut", latitude: 33.8872, longitude: 35.5134 },
      { title: "Kuala Lumpur", latitude: 3.1502, longitude: 101.7077 },
      { title: "Ulan Bator", latitude: 47.9138, longitude: 106.922 },
      { title: "Pyinmana", latitude: 19.7378, longitude: 96.2083 },
      { title: "Kathmandu", latitude: 27.7058, longitude: 85.3157 },
      { title: "Muscat", latitude: 23.6086, longitude: 58.5922 },
      { title: "Islamabad", latitude: 33.6751, longitude: 73.0946 },
      { title: "Manila", latitude: 14.579, longitude: 120.9726 },
      { title: "Doha", latitude: 25.2948, longitude: 51.5082 },
      { title: "Riyadh", latitude: 24.6748, longitude: 46.6977 },
      { title: "Singapore", latitude: 1.2894, longitude: 103.85 },
      { title: "Seoul", latitude: 37.5139, longitude: 126.9828 },
      { title: "Colombo", latitude: 6.9155, longitude: 79.8572 },
      { title: "Damascus", latitude: 33.5158, longitude: 36.2939 },
      { title: "Taipei", latitude: 25.0338, longitude: 121.5645 },
      { title: "Dushanbe", latitude: 38.5737, longitude: 68.7738 },
      { title: "Bangkok", latitude: 13.7573, longitude: 100.502 },
      { title: "Dili", latitude: -8.5662, longitude: 125.588 },
      { title: "Ankara", latitude: 39.9439, longitude: 32.856 },
      { title: "Ashgabat", latitude: 37.9509, longitude: 58.3794 },
      { title: "Abu Dhabi", latitude: 24.4764, longitude: 54.3705 },
      { title: "Tashkent", latitude: 41.3193, longitude: 69.2481 },
      { title: "Hanoi", latitude: 21.0341, longitude: 105.8372 },
      { title: "Sanaa", latitude: 15.3556, longitude: 44.2081 },
      { title: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
      { title: "Bridgetown", latitude: 13.0935, longitude: -59.6105 },
      { title: "Belmopan", latitude: 17.2534, longitude: -88.7713 },
      { title: "Sucre", latitude: -19.0421, longitude: -65.2559 },
      { title: "Brasilia", latitude: -15.7801, longitude: -47.9292 },
      { title: "Ottawa", latitude: 45.4235, longitude: -75.6979 },
      { title: "Santiago", latitude: -33.4691, longitude: -70.642 },
      { title: "Bogota", latitude: 4.6473, longitude: -74.0962 },
      { title: "San Jose", latitude: 9.9402, longitude: -84.1002 },
      { title: "Havana", latitude: 23.1333, longitude: -82.3667 },
      { title: "Roseau", latitude: 15.2976, longitude: -61.39 },
      { title: "Santo Domingo", latitude: 18.479, longitude: -69.8908 },
      { title: "Quito", latitude: -0.2295, longitude: -78.5243 },
      { title: "San Salvador", latitude: 13.7034, longitude: -89.2073 },
      { title: "Guatemala", latitude: 14.6248, longitude: -90.5328 },
      { title: "Ciudad de Mexico", latitude: 19.4271, longitude: -99.1276 },
      { title: "Managua", latitude: 12.1475, longitude: -86.2734 },
      { title: "Panama", latitude: 8.9943, longitude: -79.5188 },
      { title: "Asuncion", latitude: -25.3005, longitude: -57.6362 },
      { title: "Lima", latitude: -12.0931, longitude: -77.0465 },
      { title: "Castries", latitude: 13.9972, longitude: -60.0018 },
      { title: "Paramaribo", latitude: 5.8232, longitude: -55.1679 },
      { title: "Washington D.C.", latitude: 38.8921, longitude: -77.0241 },
      { title: "Montevideo", latitude: -34.8941, longitude: -56.0675 },
      { title: "Caracas", latitude: 10.4961, longitude: -66.8983 },
      { title: "Oranjestad", latitude: 12.5246, longitude: -70.0265 },
      { title: "Cayenne", latitude: 4.9346, longitude: -52.3303 },
      { title: "Plymouth", latitude: 16.6802, longitude: -62.2014 },
      { title: "San Juan", latitude: 18.45, longitude: -66.0667 },
      { title: "Algiers", latitude: 36.7755, longitude: 3.0597 },
      { title: "Luanda", latitude: -8.8159, longitude: 13.2306 },
      { title: "Porto-Novo", latitude: 6.4779, longitude: 2.6323 },
      { title: "Gaborone", latitude: -24.657, longitude: 25.9089 },
      { title: "Ouagadougou", latitude: 12.3569, longitude: -1.5352 },
      { title: "Bujumbura", latitude: -3.3818, longitude: 29.3622 },
      { title: "Yaounde", latitude: 3.8612, longitude: 11.5217 },
      { title: "Bangui", latitude: 4.3621, longitude: 18.5873 },
      { title: "Brazzaville", latitude: -4.2767, longitude: 15.2662 },
      { title: "Kinshasa", latitude: -4.3369, longitude: 15.3271 },
      { title: "Yamoussoukro", latitude: 6.8067, longitude: -5.2728 },
      { title: "Djibouti", latitude: 11.5806, longitude: 43.1425 },
      { title: "Cairo", latitude: 30.0571, longitude: 31.2272 },
      { title: "Asmara", latitude: 15.3315, longitude: 38.9183 },
      { title: "Addis Abeba", latitude: 9.0084, longitude: 38.7575 },
      { title: "Libreville", latitude: 0.3858, longitude: 9.4496 },
      { title: "Banjul", latitude: 13.4399, longitude: -16.6775 },
      { title: "Accra", latitude: 5.5401, longitude: -0.2074 },
      { title: "Conakry", latitude: 9.537, longitude: -13.6785 },
      { title: "Bissau", latitude: 11.8598, longitude: -15.5875 },
      { title: "Nairobi", latitude: -1.2762, longitude: 36.7965 },
      { title: "Maseru", latitude: -29.2976, longitude: 27.4854 },
      { title: "Monrovia", latitude: 6.3106, longitude: -10.8047 },
      { title: "Tripoli", latitude: 32.883, longitude: 13.1897 },
      { title: "Antananarivo", latitude: -18.9201, longitude: 47.5237 },
      { title: "Lilongwe", latitude: -13.9899, longitude: 33.7703 },
      { title: "Bamako", latitude: 12.653, longitude: -7.9864 },
      { title: "Nouakchott", latitude: 18.0669, longitude: -15.99 },
      { title: "Port Louis", latitude: -20.1654, longitude: 57.4896 },
      { title: "Rabat", latitude: 33.9905, longitude: -6.8704 },
      { title: "Maputo", latitude: -25.9686, longitude: 32.5804 },
      { title: "Windhoek", latitude: -22.5749, longitude: 17.0805 },
      { title: "Niamey", latitude: 13.5164, longitude: 2.1157 },
      { title: "Abuja", latitude: 9.058, longitude: 7.4891 },
      { title: "Kigali", latitude: -1.9441, longitude: 30.0619 },
      { title: "Dakar", latitude: 14.6953, longitude: -17.4439 },
      { title: "Freetown", latitude: 8.4697, longitude: -13.2659 },
      { title: "Mogadishu", latitude: 2.0411, longitude: 45.3426 },
      { title: "Pretoria", latitude: -25.7463, longitude: 28.1876 },
      { title: "Mbabane", latitude: -26.3186, longitude: 31.141 },
      { title: "Dodoma", latitude: -6.167, longitude: 35.7497 },
      { title: "Lome", latitude: 6.1228, longitude: 1.2255 },
      { title: "Tunis", latitude: 36.8117, longitude: 10.1761 },
    ];

    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      addCity(city.longitude, city.latitude, city.title);
    }

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title,
      });
    }

    // Make stuff animate on load
    chart.appear(1000, 100);
  }); // end am5.ready()
}
