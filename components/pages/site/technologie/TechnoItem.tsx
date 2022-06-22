import { Stack } from "@mui/material";
import React from "react";

export default function TechnoItem(props: any) {
  return (
    <Stack alignItems="center">
      <img src={props.src} width={200} height={100} />
    </Stack>
  );
}
