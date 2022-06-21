import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Footer from "../Footer";
import SideBarHeader from "./SideBarHeader";
import LinkItem from "./LinkItem";
import CustomDivider from "./CustomDivider";
import COMMON_DATA from "./../../../constants/fr/common.json";
const SideBar = () => {
  const router = useRouter();
  const { name } = router.query;
  const routerName = "/team/" + name;

  return (
    <Box sx={sideBarStyles.container}>
      <Stack spacing={2}>
        <SideBarHeader />
        <CustomDivider />
        <Grid container spacing={2} sx={sideBarStyles.content}>
          {COMMON_DATA.sidebar.map((item, index) => (
            <LinkItem
              key={index}
              href={routerName + item.path}
              text={item.title}
            />
          ))}
          <LinkItem href="/" text="Retourner à la site" />
        </Grid>
        <CustomDivider />
      </Stack>
      <Footer />
    </Box>
  );
};

const sideBarStyles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRight: "1px solid #FF6B00",
    background: "#fff",
    paddingTop: { xs: "20px", sm: "20px" },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SideBar;
