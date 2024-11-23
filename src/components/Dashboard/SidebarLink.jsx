import React from "react";
import * as Icons from "react-icons/fa";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import "./common.css";

const SidebarLink = ({ link, iconName, isMinimized }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const isActive = matchRoute(link.path);

  return (
    <NavLink
      to={link.path}
      className={`sidebar-link ${isActive ? "active" : ""}`}
    >
      <div className="sidebar-link-container">
        <Icon className={`${isMinimized ? "text-lg" : ""}`} />
        {!isMinimized && <span>{link.name}</span>}
      </div>
    </NavLink>
  );
};

export default SidebarLink;
