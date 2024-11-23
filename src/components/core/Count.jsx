import React from "react";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
  FaDollarSign,
} from "react-icons/fa";
import "./dash.css";

const Count = () => {
  const stats = [
    {
      title: "Total Orders",
      value: 75,
      icon: <FaShoppingCart />,
      trend: "up",
      trendValue: "3%",
      bgColor: "blue",
    },
    {
      title: "Total Delivered",
      value: 70,
      icon: <FaCheckCircle />,
      trend: "down",
      trendValue: "3%",
      bgColor: "green",
    },
    {
      title: "Total Cancelled",
      value: 5,
      icon: <FaTimesCircle />,
      trend: "up",
      trendValue: "3%",
      bgColor: "red",
    },
    {
      title: "Total Revenue",
      value: "$12k",
      icon: <FaDollarSign />,
      trend: "down",
      trendValue: "3%",
      bgColor: "purple",
    },
  ];

  return (
    <div className="count-container">
      {stats.map((stat, index) => (
        <div key={index} className={`count-card count-card-${stat.bgColor}`}>
          <div className="count-info">
            <h4 className="count-title">{stat.title}</h4>
            <p className="count-value">{stat.value}</p>
          </div>
          <div className="count-icon-container">
            <div className="count-icon">{stat.icon}</div>
            <p
              className={`count-trend ${
                stat.trend === "up" ? "trend-up" : "trend-down"
              }`}
            >
              {stat.trend === "up" ? "▲" : "▼"} {stat.trendValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Count;