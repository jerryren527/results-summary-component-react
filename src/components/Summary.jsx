import React from "react";
import "../styles/Summary.css";

export const Summary = (props) => {
  return (
    <div className="summary">
      <p className="bold">Summary</p>

      {props.data.map((datum) => (
        <div className={`summary-section ${datum.category}`} key={datum.category}>
          <div className="summary-section-left">
            <div id="icon" aria-label={`${datum.category} logo`}>
              {datum.icon}
            </div>
            <p>{datum.category}</p>
          </div>
          <div className="summary-section-right">
            <p className="individual-score">
              80 <span className="out-of-100">/ 100</span>
            </p>
          </div>
        </div>
      ))}

      <div className="continue-btn">
        <p>Continue</p>
      </div>
    </div>
  );
};
