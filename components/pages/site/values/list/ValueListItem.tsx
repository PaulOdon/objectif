import { Check } from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ValueListItem(props: any) {
  return (
    <Stack flexDirection={"row"} mt={2}>
      <Check sx={{ color: "#fff", fontWeight: "bold", mr: 2 }} />
      <Typography variant="h6">{props.text}</Typography>
    </Stack>
  );
}
