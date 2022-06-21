import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import DATA from "../../../../constants/fr/data.json";
import TeamCard from "./team-card";

export default function TeamsComponent() {
  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Equipe
      </Typography>
      <Grid container spacing={3} my={2} justifyContent="center">
        <Grid item>
          <TeamCard
            team_link="/team/Ogino/about"
            img_path={DATA?.ogino?.img_path}
            alt_text={DATA?.ogino?.prenom}
            team_name={DATA?.ogino?.prenom}
            team_function={DATA?.ogino?.accroche}
            team_description={DATA?.ogino?.legende}
          />
        </Grid>
        <Grid item>
          <TeamCard
            team_link="/team/Rolker/about"
            img_path={DATA?.rolker?.img_path}
            alt_text={DATA?.rolker?.prenom}
            team_name={DATA?.rolker?.prenom}
            team_function={DATA?.rolker?.accroche}
            team_description={DATA?.rolker?.legende}
          />
        </Grid>
        <Grid item>
          <TeamCard
            team_link="/team/Mac/about"
            img_path={DATA?.mac?.img_path}
            alt_text={DATA?.mac?.prenom}
            team_name={DATA?.mac?.prenom}
            team_function={DATA?.mac?.accroche}
            team_description={DATA?.mac?.legende}
          />
        </Grid>
        <Grid item>
          <TeamCard
            team_link="/team/Paul/about"
            img_path={DATA?.paul?.img_path}
            alt_text={DATA?.paul?.prenom}
            team_name={DATA?.paul?.prenom}
            team_function={DATA?.paul?.accroche}
            team_description={DATA?.paul?.legende}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
