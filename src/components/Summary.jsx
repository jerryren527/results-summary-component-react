import React from "react";
import "../styles/Summary.css";
import { SummarySection } from "./SummarySection";

import { ReactComponent as ReactionLogo } from "../assets/images/icon-reaction.svg";
import { ReactComponent as MemoryLogo } from "../assets/images/icon-memory.svg";
import { ReactComponent as VerbalLogo } from "../assets/images/icon-verbal.svg";
import { ReactComponent as VisualLogo } from "../assets/images/icon-visual.svg";

export const Summary = (props) => {
  const myProps = props;
  console.log("🚀 ~ file: Summary.jsx:6 ~ Summary ~ myProps:", myProps);

  return (
    <div className="summary">
      <p className="bold">Summary</p>

      <SummarySection score={80} icon={<ReactionLogo alt={"Reaction logo"} />} category={"Reaction"} />
      <SummarySection score={92} icon={<MemoryLogo alt={"Memory logo"} />} category={"Memory"} />
      <SummarySection score={61} icon={<VerbalLogo alt={"Verbal logo"} />} category={"Verbal"} />
      <SummarySection score={72} icon={<VisualLogo alt={"Visual logo"} />} category={"Visual"} />

      <div className="continue-btn">
        <p>Continue</p>
      </div>
    </div>
  );
};
