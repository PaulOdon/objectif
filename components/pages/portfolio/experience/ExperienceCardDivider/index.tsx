import React from "react";
import DividerComponent from "./DividerComponent";

const ExperienceCardDivider = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <DividerComponent width="66px" />
    <DividerComponent width="20px" marginInline="10px" />
    <DividerComponent width="10px" />
  </div>
);

export default ExperienceCardDivider;
