import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import ValueForm from "./ValueForm";
import ValueSection from "./ValueSection";

export default function ValueComponent() {
  return (
    <Stack sx={{ background: "#FF6B00" }}>
      <img src="/assets/vector2.png" />
      <Container sx={{ my: 20 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ValueSection />
          </Grid>
          <Grid item xs={12} md={6}>
            <ValueForm />
          </Grid>
        </Grid>
      </Container>
      <img src="/assets/vector1.png" />
    </Stack>
  );
}
