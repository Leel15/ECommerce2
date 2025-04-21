"use strict";
$(function () {
  initCharts();
  initRevenueChart();
  chartVisitors();

  $("#chat-conversation").slimscroll({
    height: "240px",
    size: "5px",
  });
  $(".recent-comment").slimscroll({
    height: "380px",
    size: "5px",
  });
});
//Charts
function initCharts() {
  $(".chart.chart-bar2").sparkline(undefined, {
    type: "bar",
    barColor: "#54B253",
    negBarColor: "#000",
    barWidth: "5px",
    height: "67px",
  });
}

function initRevenueChart() {
  // revenue chart
  var options = {
    chart: {
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Income",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Expense",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],

    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: "#9aa0ac",
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: ["#CB0C9F", "#3A416F"],
  };

  var chart = new ApexCharts(document.querySelector("#revenue"), options);

  chart.render();
}
function chartVisitors() {
  var optionsEurope = {
    series: [
      {
        name: "Visitors",
        data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605],
      },
    ],
    chart: {
      height: 100,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#5350e9"],
    stroke: {
      width: 2,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
        "2018-09-19T07:30:00.000Z",
        "2018-09-19T08:30:00.000Z",
        "2018-09-19T09:30:00.000Z",
        "2018-09-19T10:30:00.000Z",
        "2018-09-19T11:30:00.000Z",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    show: false,
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  var chartEurope = new ApexCharts(
    document.querySelector("#chart-visitors"),
    optionsEurope
  );

  chartEurope.render();
}
