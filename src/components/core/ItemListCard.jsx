import React from "react";
import "./dash.css";
import { FaBullseye, FaHamburger, FaUtensils } from "react-icons/fa";

const ItemListCard = () => {
  const items = [
    { id: 1, icon: <FaBullseye />, title: "Goals", color: "#E63946" },
    { id: 2, icon: <FaHamburger />, title: "Popular Dishes", color: "#457B9D" },
    { id: 3, icon: <FaUtensils />, title: "Menus", color: "#1D3557" },
  ];

  return (
    <div className="item-list-card">
      {items.map((item) => (
        <div className="item-row" key={item.id}>
          <div className="item-icon" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>
          <p className="item-title">{item.title}</p>
          <span className="item-arrow">➔</span>
        </div>
      ))}
    </div>
  );
};

export default ItemListCard;
