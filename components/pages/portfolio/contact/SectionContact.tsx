import React from "react";
import { Typography } from "@mui/material";

const SectionContact = ({ icon, content1, content2 }: any) => {
  return (
    <div style={sectionContactStyles.container}>
      <span style={{ color: "#C4C4C4", fontSize: 30 }}>{icon}</span>
      <Typography style={sectionContactStyles.typo}>{content1}</Typography>
      <Typography style={sectionContactStyles.typo}>{content2}</Typography>
    </div>
  );
};

const sectionContactStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column" as "column",
    marginBlock: 30,
    fontWeight: "300",
    textAlign: "center" as "center",
  },
  typo: { fontSize: 24, fontWeight: "300" },
};

export default SectionContact;
