import Link from "next/link";
import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const LinkItem = (props: any) => {
  const router = useRouter();
  const checkRouterActive = (path: string) => {
    return router.asPath === path ? true : false;
  };

  return (
    <Link href={props.href}>
      <a>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <div style={linkItemStyles.container}>
            <a
              style={
                checkRouterActive(props.href)
                  ? linkItemStyles.activeStyle
                  : linkItemStyles.defaultColor
              }
            >
              {props.text}
            </a>
            <span>
              {checkRouterActive(props.href) ? (
                <ArrowForward color="primary" />
              ) : null}
            </span>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

const linkItemStyles = {
  container: {
    paddingBlock: 5,
    color: "#47413D",
    display: "flex",
    cursor: "pointer",
  },
  activeStyle: {
    color: "#FF6B00",
    fontWeight: "600",
  },
  defaultColor: {
    color: "#47413D",
  },
};

export default LinkItem;
