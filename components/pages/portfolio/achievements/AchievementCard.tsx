import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const AchievementCard = (props: any) => {
  return (
    <div
      style={{
        borderRadius: 20,
        backgroundImage: `url("${props.background}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "#000",
          opacity: 0.5,
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: 0,
          borderRadius: 20,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          padding: 30,
        }}
      >
        <Typography variant="h4" color="primary">
          {props.title}
        </Typography>
        <Typography variant="body2" color="#fff" py={2}>
          {props.description}
        </Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link href={props.url}>
            <Button
              variant="outlined"
              style={{
                borderRadius: 20,
                color: "#fff",
                borderColor: "#fff",
              }}
            >
              <InsertLinkIcon />
            </Button>
          </Link>
          <Link href={props.repository}>
            <Button
              variant="outlined"
              style={{
                borderRadius: 20,
                marginInline: 20,
                color: "#fff",
                borderColor: "#fff",
              }}
            >
              <GitHubIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
