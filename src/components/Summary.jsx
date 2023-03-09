import React from "react";
import "../styles/Summary.css";

export const Summary = () => {
  return (
    <div className="summary">
      <p className="bold">Summary</p>
      <div className="summary-section reaction">
        <div className="summary-section-left">
          <img src="images/icon-reaction.svg" alt="reaction logo" />
          <p>Reaction</p>
        </div>
        <div className="summary-section-right">
          <p className="individual-score">
            80 <span className="out-of-100">/ 100</span>
          </p>
        </div>
      </div>

      <div className="summary-section memory">
        <div className="summary-section-left">
          <img src="images/icon-memory.svg" alt="memory logo" />
          <p>Memory</p>
        </div>
        <div className="summary-section-right">
          <p className="individual-score">
            92 <span className="out-of-100">/ 100</span>
          </p>
        </div>
      </div>

      <div className="summary-section verbal">
        <div className="summary-section-left">
          <img src="images/icon-verbal.svg" alt="verbal logo" />
          <p>Verbal</p>
        </div>
        <div className="summary-section-right">
          <p className="individual-score">
            61 <span className="out-of-100">/ 100</span>
          </p>
        </div>
      </div>

      <div className="summary-section visual">
        <div className="summary-section-left">
          <img src="images/icon-visual.svg" alt="visual logo" />
          <p>Visual</p>
        </div>
        <div className="summary-section-right">
          <p className="individual-score">
            72 <span className="out-of-100">/ 100</span>
          </p>
        </div>
      </div>

      <div className="continue-btn">
        <p>Continue</p>
      </div>
    </div>
  );
};
