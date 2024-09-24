"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
export default class Monitor extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date().getTime();

    this.state = {
      series: [
        {
          data: Array.from({ length: 10 }, (_, i) => ({
            x: now - (10 - i) * 1000,
            y: Math.floor(Math.random() * (105 - 80 + 1) + 75),
          })),
        },
      ],
      options: {
        chart: {
          id: "realtime",
          height: 350,
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          background: "#fff",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 4,
          colors: ["#ccfe7a"],
        },
        title: {
          text: "Heart Rate Realtime Monitor",
          align: "left",
          style: {
            color: "#000",
            fontSize: "20px",
            fontFamily: "Poppins, Arial, sans-serif",
            fontWeight: 600,
          },
        },
        markers: {
          size: 5,
          colors: ["#ccfe7a"],
          strokeColors: "#000",
          strokeWidth: 2,
        },
        xaxis: {
          type: "datetime",
          range: 10000,
          labels: {
            style: {
              colors: "#000",
              fontSize: "12px",
            },
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "#ccfe7a",
            width: 6,
          },
        },
        yaxis: {
          max: 150,
          min: 70,
          labels: {
            style: {
              colors: "#000",
              fontSize: "12px",
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          borderColor: "#e7e7e7",
          strokeDashArray: 0,
        },
      },
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const x = new Date().getTime();
      const y = Math.floor(Math.random() * (105 - 80 + 1) + 75);
      this.updateSeries(x, y);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateSeries = (x, y) => {
    const newSeries = [...this.state.series];
    newSeries[0].data.push({ x, y });
    if (newSeries[0].data.length > 10) {
      newSeries[0].data.shift();
    }

    this.setState(
      {
        series: newSeries,
      },
      () => {
        ApexCharts.exec("realtime", "updateSeries", this.state.series, true);
      }
    );
  };

  render() {
    return (
      <div id="monitor" className="w-1/2 h-screen">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
