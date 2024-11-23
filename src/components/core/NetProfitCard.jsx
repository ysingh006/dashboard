import React from "react";
import "./dash.css";

const NetProfitCard = () => {
  return (
    <div className="net-profit-card">
      <div className="profit-info">
        <p className="title">Net Profit</p>
        <p className="amount">$6759.25</p>
        <p className="percentage">
          <span className="icon">▲</span> 3%
        </p>
      </div>
      <div className="goal-progress">
        <div className="progress-circle">
          <div className="circle">
            <div className="inner-circle">
              <p className="percentage-text">70%</p>
              <p className="goal-text">Goal Completed</p>
            </div>
          </div>
        </div>
        <p className="note">*The values here have been rounded off.</p>
      </div>
    </div>
  );
};

export default NetProfitCard;
