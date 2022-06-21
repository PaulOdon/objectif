import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import COMMON_DATA from "./../../constants/fr/common.json";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Layout = ({ children }: any) => {
  const router = useRouter();
  const [displaySideBar, setDisplaySideBar] = useState(true);
  const toggleSideBar = () => {
    setDisplaySideBar(!displaySideBar);
  };

  return (
    <Box
      sx={[
        {
          flexGrow: 1,
          paddingY: 4,
        },
        layoutStyles.superContainer,
      ]}
    >
      <Grid container style={layoutStyles.common}>
        <Grid
          sx={{
            display: { xs: "none", sm: "none", md: "block ", lg: "block" },
            position: {
              xs: displaySideBar ? "absolute" : "static",
              sm: displaySideBar ? "absolute" : "static",
              md: displaySideBar ? "static" : "absolute",
              lg: displaySideBar ? "static" : "absolute",
            },
            width: { xs: "100%", sm: "100%" },
            zIndex: 3,
          }}
          item
          xs={12}
          sm={12}
          md={displaySideBar ? 3 : 0}
          lg={displaySideBar ? 3 : 0}
          style={{
            display: displaySideBar ? "block" : "none",
          }}
        >
          <div style={{ position: "fixed", width: "300px" }}>
            <SideBar />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={displaySideBar ? 9 : 12}
          lg={displaySideBar ? 9 : 12}
        >
          {/* {router.pathname == COMMON_DATA.sidebar[0].path ? null : ( */}
          <Navbar toggleSideBar={toggleSideBar} />
          {/* )} */}
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}
            viewport={{ once: true }}
            transition={transition}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

const layoutStyles = {
  superContainer: {},
  common: { height: "100%", width: "100%" },
};

export default Layout;
