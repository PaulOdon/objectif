import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import MapIcon from "@mui/icons-material/Map";
import SectionContact from "../../../../components/pages/portfolio/contact/SectionContact";
import Layout from "../../../../components/layouts/Layout";
import DATA from "../../../../constants/fr/data.json";
import { useSelectedTeam } from "../../../../hooks/useSelectedTeam";

const Contacts = (props: any) => {
  const route = useRouter();
  const { name } = route.query;
  const selectedTeam = useSelectedTeam(name, DATA);

  return (
    <Layout>
      <SectionContact
        icon={<CallIcon style={{ fontSize: 30 }} />}
        content1={selectedTeam?.contacts?.num1}
        content2={selectedTeam?.contacts?.num2}
      />
      <SectionContact
        icon={<EmailIcon style={{ fontSize: 30 }} />}
        content1={selectedTeam?.contacts?.email1}
        content2={selectedTeam?.contacts?.email2}
      />
      <SectionContact
        icon={<MapIcon style={{ fontSize: 30 }} />}
        content1={selectedTeam?.contacts?.address1}
        content2={selectedTeam?.contacts?.address2}
      />
    </Layout>
  );
};

export default Contacts;
