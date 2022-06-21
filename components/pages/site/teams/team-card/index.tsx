import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard(props: any) {
  return (
    <Link href={props.team_link}>
      <Stack
        width={400}
        p={3}
        border={"1px solid #dddddd"}
        borderRadius={1}
        sx={{ cursor: "pointer" }}
      >
        <Image
          src={props.img_path}
          alt={props.alt_text}
          width={250}
          height={250}
          style={{ borderRadius: "50%" }}
        />
        <Typography variant="h6">{props.team_name}</Typography>
        <Typography variant="subtitle2" color={"#767D86"}>
          {props.team_function}
        </Typography>
        <Typography variant="body2" color={"#767D86"}>
          {props.team_description}
        </Typography>
      </Stack>
    </Link>
  );
}
