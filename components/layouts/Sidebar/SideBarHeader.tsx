import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import DATA from "./../../../constants/fr/data.json";
import { useRouter } from "next/router";

const SideBarHeader = (props: any) => {
  const route = useRouter();
  const { name } = route.query;
  const [selectedTeam, setSelectedTeam] = useState({} as any);

  useEffect(() => {
    switch (name) {
      case "Paul":
        setSelectedTeam(DATA.paul);
        break;
      case "Ogino":
        setSelectedTeam(DATA.ogino);
        break;
      case "Rolker":
        setSelectedTeam(DATA.rolker);
        break;
      case "Mac":
        setSelectedTeam(DATA.mac);
        break;

      default:
        setSelectedTeam(DATA.paul);
        break;
    }
  }, [name]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={sideBarHeaderStyles.avatarStyle}
          src={selectedTeam?.img_path}
          alt="avatar"
        />
      </div>
      <Typography variant="body1" textAlign="center" color="primary">
        {selectedTeam?.nom} <br /> {selectedTeam?.prenom}
      </Typography>
      <Typography variant="body1" color="secondary" textAlign="center">
        {selectedTeam?.accroche} {selectedTeam?.specialite}
      </Typography>
    </>
  );
};

const sideBarHeaderStyles = {
  avatarStyle: {
    border: "2px solid rgba(255, 107, 0, 1)",
    borderRadius: "50%",
    width: "150px",
    height: "150px",
  },
};

export default SideBarHeader;
