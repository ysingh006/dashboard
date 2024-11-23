import React from "react";
import Header from "../components/common/Header";
import Count from "../components/core/Count";
import ActivityChart from "../components/core/ActivityChart";
import NetProfitCard from "../components/core/NetProfitCard";
import ItemListCard from "../components/core/ItemListCard";
import CustomerFeedback from "../components/core/CustomerFeedback";
import RecentOrders from "../components/core/RecentOrders";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="dashboard-contain">
        <span style={{ margin: "5px", fontFamily: "cursive" }}>Dashboard</span>
        <div className="dashboard">
          <div className="dashboard-left">
            <div className="card">
              <Count />
            </div>
            <div className="card">
              <ActivityChart />
            </div>
            <div className="card" style={{ minHeight: "388px" }}>
              <RecentOrders />
            </div>
          </div>
          <div className="dashboard-right">
            <div className="card">
              <NetProfitCard />
            </div>
            <div className="card" style={{ minHeight: "295px" }}>
              <ItemListCard />
            </div>
            <div className="card" style={{ minHeight: "490px" }}>
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
