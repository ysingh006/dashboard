import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import "./dash.css";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

const ActivityChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 23 }, (_, i) => i + 5),
        datasets: [
          {
            label: "Activity",
            data: [
              4000, 6000, 8000, 7000, 5000, 4000, 3000, 9000, 12000, 10000,
              8000, 7000, 6000, 4000, 3000, 15000, 11000, 9000, 8000, 7000,
              5000, 4000,
            ],
            backgroundColor: "#3B82F6",
            borderRadius: 4,
            barThickness: 12,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#ffffffb3",
            },
          },
          y: {
            grid: {
              color: "#2d2d3a",
            },
            ticks: {
              color: "#ffffffb3",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="activity-chart-container">
      <div className="activity-chart-header">
        <h3>Activity</h3>
        <select className="activity-chart-dropdown">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div style={{ height: "300px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ActivityChart;
