import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import TechnoItem from "./TechnoItem";

export default function TechnologieComponent() {
  return (
    <Stack>
      <Container>
        <Typography variant="h3" my={5} textAlign="center" color={"#24285B"}>
          Technologies
        </Typography>
        <Grid container>
          <Grid item xs={12} md={5}>
            <TechnoItem src="/assets/techno/Angular.png" />
            <TechnoItem src="/assets/techno/Node.png" />
            <TechnoItem src="/assets/techno/React.png" />
            <TechnoItem src="/assets/techno/Nest.png" />
            <TechnoItem src="/assets/techno/wordpress.png" />
          </Grid>
          <Grid item xs={12} md={7}>
            <img
              src="/assets/techno/installing.png"
              alt="installing.png"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
