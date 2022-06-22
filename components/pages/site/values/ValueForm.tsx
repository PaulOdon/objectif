import {
  Box,
  Button,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { palette } from "@mui/system";
import React from "react";

export default function ValueForm() {
  return (
    <Stack spacing={3} p={4} mt={6} sx={{ background: "white" }}>
      <TextField variant="outlined" label="Nom" />
      <TextField variant="outlined" label="Email" />
      <Stack>
        <Typography variant="body2">Message</Typography>
        <TextareaAutosize minRows={5} placeholder="Message" />
      </Stack>
      <Button variant="contained" sx={{ color: "#fff" }}>
        Envoyer
      </Button>
    </Stack>
  );
}
