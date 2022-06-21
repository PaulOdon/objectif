import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import COMMON_DATA from "./../../../constants/fr/common.json";
import Link from "next/link";
type ButtonProps = {
  toggleSideBar(): void;
};

const Navbar: FunctionComponent<ButtonProps> = ({ toggleSideBar }) => {
  const router = useRouter();

  const getPathTitle = () => {
    let pageTitle = "";
    COMMON_DATA.sidebar.forEach((item) => {
      if (router.asPath.includes(item.path)) {
        pageTitle = item.title;
      }
    });
    return pageTitle;
  };

  return (
    <div style={navbarStyles.container}>
      <Button
        variant="outlined"
        color="primary"
        style={navbarStyles.homeButton}
        onClick={() => toggleSideBar()}
        sx={{ zIndex: 5 }}
      >
        <MenuIcon color="primary" />
      </Button>
      <Typography variant="h5" textAlign="center" color="secondary">
        {getPathTitle()}
      </Typography>
      <Button
        variant="outlined"
        style={navbarStyles.downloadButton}
        size="medium"
      >
        {/* {COMMON_DATA.DOWNLOAD_CV_BUTTON} */}
        <DownloadForOfflineIcon color="primary" />
      </Button>
    </div>
  );
};

const navbarStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: "30px",
    width: "100%",
    background: "#fff",
    borderRadius: "20px",
  },
  homeButton: { borderRadius: "20px" },
  downloadButton: { borderRadius: "20px", color: "primary" },
};

export default Navbar;
