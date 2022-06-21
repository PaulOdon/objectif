import React from "react";

const CustomDivider = () => (
  <p style={customDividerStyles.container}>
    <span style={customDividerStyles.line}></span>
  </p>
);

const customDividerStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  line: {
    background: "#FF6B00",
    width: "150px",
    height: "1px",
  },
};

export default CustomDivider;
