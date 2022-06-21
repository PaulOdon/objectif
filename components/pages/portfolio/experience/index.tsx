import { Grid } from "@mui/material";
import ExperienceCardBody from "./ExperienceCardBody";
import ExperienceCardDivider from "./ExperienceCardDivider";
import ExperienceCardHeader from "./ExperienceCardHeader";
import ExperienceCardImage from "./ExperienceCardImage";

export const ExperienceCard = (props: any) => {
  return (
    <>
      {props.selectedTeam?.experiences?.map((experience: any, index: any) => (
        <Grid
          key={index}
          container
          spacing={1}
          style={experienceCardStyles.container}
        >
          <Grid item sm={12} style={{ marginLeft: 30 }}>
            <ExperienceCardHeader
              date_debut={experience.date_debut}
              date_fin={experience.date_fin}
              poste_occupe={experience.poste_occupe}
              societe={experience.societe}
            />
            <ExperienceCardDivider />
            <ExperienceCardBody
              description_poste={experience.description_poste}
              technologies={experience.technologies}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

const experienceCardStyles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    // boxShadow: "5px 4px 22px rgba(0, 0, 0, 0.15)",
    paddingBlock: "10px",
    marginBottom: "30px",
    backgroundColor: "#FCFCFC",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
    marginLeft: -150,
    marginTop: -10,
  },
};
