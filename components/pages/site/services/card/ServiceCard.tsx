import { Stack, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard(props: any) {
  return (
    <Stack
      width={250}
      padding={2}
      sx={{ border: "0.2px solid #767D86", background: "#fff" }}
      pb={2}
    >
      <Stack alignItems={"center"}>
        <img src={props.src} alt={props.alt} width={100} height={100} />
      </Stack>
      <Typography
        variant="subtitle1"
        color={"#24285B"}
        lineHeight={1.2}
        height={40}
      >
        {props.title}
      </Typography>
      <Typography variant="caption" height={40}>
        {props.subtitle}
      </Typography>
    </Stack>
  );
}
