import React from "react";
import { Typography } from "@mui/material";
import COMMON_DATA from "../../../../constants/fr/common.json";

const ExperienceCardBody = (props: any) => (
  <>
    <Typography variant="body2" pr={5}>
      <b>{COMMON_DATA.experience.description_poste} : </b>{" "}
      {props.description_poste}
    </Typography>
    <Typography variant="body2" style={{ marginBlock: "20px" }}>
      <b>{COMMON_DATA.experience.technologies} : </b>
      {props.technologies}
    </Typography>
  </>
);

export default ExperienceCardBody;
