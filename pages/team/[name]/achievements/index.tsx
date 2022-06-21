import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import DATA from "../../../../constants/fr/data.json";
import Layout from "../../../../components/layouts/Layout";
import { useSelectedTeam } from "../../../../hooks/useSelectedTeam";
import AchievementCard from "../../../../components/pages/portfolio/achievements/AchievementCard";

const Achievements = () => {
  const route = useRouter();
  const { name } = route.query;
  const selectedTeam = useSelectedTeam(name, DATA);

  return (
    <Layout>
      <Grid container spacing={6} pt={5} px={4} pb={5}>
        {selectedTeam?.achievements?.map((achievement: any, index: any) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
            <AchievementCard
              title={achievement.title}
              description={achievement.description}
              background={achievement.background}
              url={achievement.url}
              repository={achievement.repository}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Achievements;
