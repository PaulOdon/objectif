import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

export default function SectionTitle(props: any) {
  return (
    <Stack flex={1}>
      <Typography color={props.color} variant={props.variant}>
        {props.title}
      </Typography>
    </Stack>
  );
}
