import React, { useEffect, useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import DATA from "./../../../constants/fr/data.json";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
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

  console.log("selected team : ", selectedTeam);

  return (
    <>
      <div style={footerStyles.container}>
        <Link href={`${selectedTeam?.links?.FACEBOOK}`}>
          <Button variant="text" size="small">
            <FacebookOutlinedIcon color="primary" />
          </Button>
        </Link>
        <Link href={`${selectedTeam?.links?.LINKEDIN}`}>
          <Button variant="text" size="small">
            <LinkedInIcon color="primary" />
          </Button>
        </Link>
        <Link href={`${selectedTeam?.links?.AUTRE}`}>
          <Button variant="text" size="small">
            <TwitterIcon color="primary" />
          </Button>
        </Link>
      </div>
      {/* <div style={{ textAlign: "center" }}>Copyright 2022</div> */}
    </>
  );
};

const footerStyles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBlock: 15,
    paddingInline: "20%",
  },
};

export default Footer;
