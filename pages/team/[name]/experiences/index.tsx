import { useRouter } from "next/router";
import React from "react";
import DATA from "../../../../constants/fr/data.json";
import Layout from "../../../../components/layouts/Layout";
import { useSelectedTeam } from "../../../../hooks/useSelectedTeam";
import { ExperienceCard } from "../../../../components/pages/portfolio/experience";

const Experiences = () => {
  const route = useRouter();
  const { name } = route.query;
  const selectedTeam = useSelectedTeam(name, DATA);

  return (
    <Layout>
      <div style={{ padding: 40 }}>
        <ExperienceCard selectedTeam={selectedTeam} />
      </div>
    </Layout>
  );
};

export default Experiences;
