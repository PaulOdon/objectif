import React from "react";
import Circle from "./Circle";
import Text from "./Text";

const cleanPercentage = (percentage: any) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Pie = (props: any) => {
  const pct = cleanPercentage(props.percentage);
  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" percentage={null} />
        <Circle colour={props.colour} percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
