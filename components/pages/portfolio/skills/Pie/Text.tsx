import React from "react";
const Text = (props: any) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"0.8em"}
    >
      {props.percentage.toFixed(0)}%
    </text>
  );
};

export default Text;
