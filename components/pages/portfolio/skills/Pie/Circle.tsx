import React from "react";

const Circle = (props: any) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - props.percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={150}
      cy={50}
      fill="transparent"
      stroke={strokePct !== circ ? props.colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"3px"}
      strokeDasharray={circ}
      strokeDashoffset={props.percentage ? strokePct : 0}
    ></circle>
  );
};

export default Circle;
