import { useEffect, useState } from "react";

export function useSelectedTeam(name: any, DATA: any) {
  const [selectedTeam, setSelectedTeam] = useState({} as any);

  useEffect(() => {
    switch (name) {
      case "Paul":
        setSelectedTeam(DATA?.paul);
        break;
      case "Ogino":
        setSelectedTeam(DATA?.ogino);
        break;
      case "Rolker":
        setSelectedTeam(DATA?.rolker);
        break;
      case "Mac":
        setSelectedTeam(DATA?.mac);
        break;

      default:
        setSelectedTeam(DATA?.paul);
        break;
    }
  }, [name]);

  return selectedTeam;
}
