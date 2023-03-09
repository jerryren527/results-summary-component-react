import React from "react";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <p className="fainted">Your Result</p>
      <div className="overall-score-container">
        <p className="overall-score">76</p>
        <p className="fainted">of 100</p>
      </div>
      <p className="bold">Great</p>
      <p className="fainted">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};
