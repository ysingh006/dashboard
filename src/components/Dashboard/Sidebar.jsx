import React, { useState } from "react";
import "./common.css";
import { sidebarLinks } from "../data";
import SidebarLink from "./SidebarLink";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Sidebar = ({ user }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? "minimized" : ""}`}>
      <div className="hello">{!isMinimized && "Yogesh"} ✨</div>
      <div className="sidebar-links">
        {sidebarLinks?.map((link) => {
          if (link.type && user?.accountType !== link.type) return null;
          return (
            <SidebarLink
              key={link.id}
              link={link}
              iconName={link.icon}
              isMinimized={isMinimized}
            />
          );
        })}
      </div>

      <button onClick={toggleSidebar} className="toggle-button">
        {isMinimized ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
    </div>
  );
};

export default Sidebar;
