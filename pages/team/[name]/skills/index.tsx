import React from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import DATA from "../../../../constants/fr/data.json";
import Layout from "../../../../components/layouts/Layout";
import { useSelectedTeam } from "../../../../hooks/useSelectedTeam";
import SkillCard from "../../../../components/pages/portfolio/skills/SkillCard";

const Skills = () => {
  const route = useRouter();
  const { name } = route.query;
  const selectedTeam = useSelectedTeam(name, DATA);

  return (
    <Layout>
      <Grid container spacing={6} pt={5} px={4} pb={5}>
        {selectedTeam?.skills?.map((skill: any, index: any) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <SkillCard
              title={skill.technologie}
              percentage={skill.pourcentage}
              concepts={skill.concepts}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Skills;
