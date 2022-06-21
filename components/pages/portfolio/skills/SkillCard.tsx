import React from "react";
import { Typography } from "@mui/material";
import Pie from "./Pie";

const SkillCard = (props: any) => (
  <div style={skillCardStyles.container}>
    <Typography variant="h5" color="secondary" textAlign="center" mb={1} mt={1}>
      {props.title}
    </Typography>
    <div style={skillCardStyles.body}>
      <div style={skillCardStyles.percentageContainer}>
        <Pie percentage={props.percentage} colour="#FF6B00" />
      </div>
      <div style={skillCardStyles.concepts}>{props.concepts}</div>
    </div>
  </div>
);

const skillCardStyles = {
  container: {
    padding: "10px",
    boxShadow: "5px 4px 22px rgba(0, 0, 0, 0.15)",
    borderRadius: "25px",
  },
  body: {
    display: "flex",
  },
  percentageContainer: { height: "100px", width: "100px" },
  concepts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },
};

export default SkillCard;
