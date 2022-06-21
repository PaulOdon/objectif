import React from "react";

const DividerComponent = (props: any) => (
  <p
    style={{
      width: props.width,
      height: "8px",
      backgroundColor: "#FF6B00",
      borderRadius: "4px",
      marginInline: props.marginInline,
    }}
  ></p>
);

export default DividerComponent;
