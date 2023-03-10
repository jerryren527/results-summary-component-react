import React from "react";
import "../styles/Summary.css";
import { SummarySection } from "./SummarySection";

import ReactionLogo from "../assets/images/icon-reaction.svg";
import MemoryLogo from "../assets/images/icon-memory.svg";
import VerbalLogo from "../assets/images/icon-verbal.svg";
import VisualLogo from "../assets/images/icon-visual.svg";

export const Summary = () => {
  return (
    <div className="summary">
      <p className="bold">Summary</p>

      <SummarySection score={80} icon={ReactionLogo} category={"Reaction"} />
      <SummarySection score={92} icon={MemoryLogo} category={"Memory"} />
      <SummarySection score={61} icon={VerbalLogo} category={"Verbal"} />
      <SummarySection score={72} icon={VisualLogo} category={"Visual"} />

      <div className="continue-btn">
        <p>Continue</p>
      </div>
    </div>
  );
};
