import React from "react";

export const SummarySection = ({ category, score, icon }) => {
  return (
    <div className={`summary-section ${category}`}>
      <div className="summary-section-left">
        <img alt={`${category} logo`} src={icon} className="icon" />
        <p>{category}</p>
      </div>
      <div className="summary-section-right">
        <p className="individual-score">
          {score} <span className="out-of-100">/ 100</span>
        </p>
      </div>
    </div>
  );
};
