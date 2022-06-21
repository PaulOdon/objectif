import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import TeamsComponent from "../components/pages/site/teams";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* NavBar */}
      {/* Intro */}
      {/* About */}
      {/* Service */}
      {/* Technologie */}
      {/* Values */}
      {/* Team */}
      <TeamsComponent />
      {/* Contact */}
      {/* Footer */}
    </div>
  );
};

export default Home;
