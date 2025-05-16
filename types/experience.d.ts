export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  achievements: string[];
};

export type ExperienceData = {
  title: string;
  [key: string]: ExperienceItem | string;
};
