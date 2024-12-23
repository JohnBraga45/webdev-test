import React from "react";
import "./Card.css";

const Card = ({ title, children }) => {
  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <span className="card-icon">-</span>
      </div>
      <div className="card-content">{children}</div>
    </section>
  );
};

export default Card;
