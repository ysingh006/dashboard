import React from "react";
import "./notFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default PageNotFound;
