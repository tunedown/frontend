"use client";
import React, { useState, useEffect } from "react";

const Monitor = () => {
  const [Chart, setChart] = useState();

  const now = new Date().getTime();
  const initialSeries = {
    data: Array.from({ length: 10 }, (_, i) => ({
      x: now - (10 - i) * 1000,
      y: Math.floor(Math.random() * (105 - 80 + 1) + 80),
    })),
  };

  const [series, setSeries] = useState([initialSeries]);

  const options = {
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
  };

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
    const interval = setInterval(() => {
      const x = new Date().getTime();
      const y = Math.floor(Math.random() * (105 - 80 + 1) + 80);
      updateSeries(x, y);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const updateSeries = (x, y) => {
    const newSeries = [...series];
    newSeries[0].data.push({ x, y });
    if (newSeries[0].data.length > 10) {
      newSeries[0].data.shift();
    }
    setSeries(newSeries);
    ApexCharts.exec("realtime", "updateSeries", newSeries, true);
  };

  return (
    <div id="monitor" className="w-1/2 h-screen">
      {Chart && (
        <div id="chart">
          <Chart options={options} series={series} type="line" height={350} />
        </div>
      )}
      <div id="html-dist"></div>
    </div>
  );
};

export default Monitor;
