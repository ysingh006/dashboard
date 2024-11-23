import React from "react";
import { Outlet } from "react-router-dom";
import "./common.css";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar className="sidebar" />

      <div className="content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
