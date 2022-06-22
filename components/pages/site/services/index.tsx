import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./card/ServiceCard";

export default function ServiceComponent() {
  return (
    <Stack mb={4}>
      <Stack alignItems={"center"} sx={{ background: "#FF6B00" }}>
        <Container>
          <Stack alignItems={"center"}>
            <Typography variant="h3" color={"#fff"} my={2}>
              Services
            </Typography>
            <Typography variant="body2" color={"#fff"} mb={3}>
              Curabitur aliquet quam id dui posuere blandit. Proin eget tortor
              risus.
            </Typography>
          </Stack>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <ServiceCard
                src="/assets/services/noun_Mobiledev.png"
                alt="noun_Mobiledev"
                title="Développement & Edition de logiciel"
                subtitle="Web, mobile et desktop"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                src="/assets/services/noun_maintenance.png"
                alt="noun_maintenance"
                title="Maintenance"
                subtitle="Maintenance des systèmes informatiques"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                src="/assets/services/noun_database.png"
                alt="noun_database"
                title="Administration de base de données"
                subtitle="Organisation, gestion de fiabilité"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                src="/assets/services/noun_Server.png"
                alt="noun_Server"
                title="Administration de serveur"
                subtitle="Installation, paramétrage, la veille technologique..."
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <ServiceCard
            src="/assets/services/noun_networking.png"
            alt="noun_networking"
            title="Administration réseau"
            subtitle="Cablage, routage, sécurité du réseau ....."
          />
        </Grid>
        <Grid item>
          <ServiceCard
            src="/assets/services/noun_IoT.png"
            alt="noun_IoT"
            title="Internet des objets"
            subtitle="Interconnexion entre l'Internet et des objets ..."
          />
        </Grid>
        <Grid item>
          <ServiceCard
            src="/assets/services/noun_AI.png"
            alt="noun_AI"
            title="Intelligent Artificiel"
            subtitle="Algorithmes exécutés dans un environnement ..."
          />
        </Grid>
        <Grid item>
          <ServiceCard
            src="/assets/services/noun_Robot.png"
            alt="noun_Robot"
            title="Robots informatique"
            subtitle="agent logiciel automatique ou semi-automatique"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
