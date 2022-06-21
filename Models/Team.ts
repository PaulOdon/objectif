import { Achievement } from "./Achievement";
import { CV } from "./CV";
import { Exprerience } from "./Experience";
import { Skill } from "./Skill";
import { Training } from "./Training";

export interface Team {
  nom: string;
  prenom: string;
  accroche: string;
  spacialite: string;
  legende: string;
  img_path: string;
  skills: [Skill];
  links: object;
  experiences: [Exprerience];
  trainings: [Training];
  achievements: [Achievement];
  cv_file_path: string;
  cv_file_name: string;
}
