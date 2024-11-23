import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/common/PageNotFound";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Shopping from "./pages/Shopping";
import Store from "./pages/Store";
import Wallet from "./pages/Wallet";

const App = () => {
 

  return (
    <Router>
      <Routes>
        <Route  element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <>
            <Route path="/Chart" element={<Chart />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Wallet" element={<Wallet />} />
          </>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
