import React from "react";
import TrainingCycle from "../../../../components/pages/portfolio/training/TrainingCycle";
import DATA from "../../../../constants/fr/data.json";
import Layout from "../../../../components/layouts/Layout";
import { useRouter } from "next/router";
import { useSelectedTeam } from "../../../../hooks/useSelectedTeam";

const Trainings = () => {
  const route = useRouter();
  const { name } = route.query;
  const selectedTeam = useSelectedTeam(name, DATA);

  return (
    <Layout>
      <div style={{ marginTop: 30, marginLeft: 50 }}>
        {selectedTeam?.trainings?.map((training: any, index: any) => (
          <TrainingCycle
            key={index}
            year={
              index === selectedTeam?.trainings?.length - 1
                ? new Date().getFullYear()
                : training.year
            }
            diploma={training.diploma}
            school={training.school}
            color={
              index === 0 || index === selectedTeam?.trainings?.length - 1
                ? "#F8BF96"
                : ""
            }
          />
        ))}
      </div>
    </Layout>
  );
};

export default Trainings;
