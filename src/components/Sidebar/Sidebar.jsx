import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (page) => {
    if (page === "Utilizador") {
      alert("Você está na página do Utilizador.");
    } else {
      alert(`A página "${page}" ainda não está implementada.`);
    }
  };

  return (
    <>
   
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? "Fechar" : "Menu"}
      </button>
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <ul className="sidebar-list">
          <li
            className="sidebar-item inactive"
            onClick={() => handleLinkClick("Lorem Ipsum")}
          >
            Lorem Ipsum
          </li>
          <li
            className="sidebar-item active"
            onClick={() => handleLinkClick("Utilizador")}
          >
            Utilizador
          </li>
          <li
            className="sidebar-item inactive"
            onClick={() => handleLinkClick("Quantum solum")}
          >
            Quantum solum
          </li>
          <li
            className="sidebar-item inactive"
            onClick={() => handleLinkClick("Marcus Tremer")}
          >
            Marcus Tremer
          </li>
        </ul>
        <div className="sidebar-footer">2019© Premium-minds.com</div>
      </aside>
    </>
  );
};

export default Sidebar;
