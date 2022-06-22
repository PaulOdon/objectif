import { Check } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ValueListItem from "./list/ValueListItem";

export default function ValueSection() {
  return (
    <Stack p={3} sx={{ color: "#fff", pr: 3 }}>
      <Typography variant="h3" mb={2}>
        Nos valeurs
      </Typography>
      <Typography variant="body1" mb={1}>
        Satisfaction garantie à 100%
      </Typography>
      <Typography variant="body2">
        Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
      </Typography>
      <List dense>
        <ValueListItem text="Honnêteté" />
        <ValueListItem text="Transarence" />
        <ValueListItem text="Ethique & Agilité" />
        <ValueListItem text="Respect du delais" />
        <ValueListItem text="Compréhension" />
        <ValueListItem text="Innovation" />
      </List>
    </Stack>
  );
}
