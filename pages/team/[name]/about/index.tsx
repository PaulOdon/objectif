import { Button, Typography } from "@mui/material";
import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { useRouter } from "next/router";
import COMMON_DATA from "../../../../constants/fr/common.json";
import DATA from "../../../../constants/fr/data.json";
import Layout from "../../../../components/layouts/Layout";
import { useSelectedTeam } from "../../../../hooks/useSelectedTeam";

const About = () => {
  const route = useRouter();
  const { name } = route.query;
  const selectedTeam = useSelectedTeam(name, DATA);

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          marginTop: "5%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          color="secondary"
          textAlign="center"
          fontWeight="100"
        >
          {selectedTeam?.accroche}
        </Typography>{" "}
        <Typography
          variant="h2"
          color="primary"
          textAlign="center"
          fontWeight="100"
        >
          {selectedTeam?.spacialite}
        </Typography>
        <Typography
          variant="body1"
          color="#A09287"
          textAlign="center"
          marginY={"9%"}
          width={"45%"}
          fontWeight="300"
        >
          " {selectedTeam?.legende} "
        </Typography>
        <a
          href={selectedTeam?.cv_file_path}
          download={selectedTeam?.cv_file_name}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{
              color: "white",
              borderRadius: "20px",
              fontWeight: "300",
              position: "static",
            }}
          >
            <DownloadForOfflineIcon style={{ marginRight: 5 }} />
            {COMMON_DATA.DOWNLOAD_CV_BUTTON}
          </Button>
        </a>
      </div>
    </Layout>
  );
};

export default About;
