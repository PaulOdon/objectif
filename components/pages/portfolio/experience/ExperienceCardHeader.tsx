import React from "react";
import { Typography } from "@mui/material";

const ExperienceCardHeader = (props: any) => (
  <div>
    <Typography variant="body2">
      {props.date_debut} - {props.date_fin}
    </Typography>
    <Typography variant="h5" color="primary">
      {props.poste_occupe}
    </Typography>
    <Typography variant="h6">{props.societe}</Typography>
  </div>
);

export default ExperienceCardHeader;
