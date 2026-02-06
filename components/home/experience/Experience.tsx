import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "The Access Group",
    position: "Python AWS Developer",
    time: "Jan 2024 - Present",
    location: "Surat, Gujarat",
    description:
      "Worked as a Software Python AWS Developer, utilizing Python, AWS Lambda, DynamoDB, API Gateway, FastAPI, S3, EFS, MongoDB, and Redis to build and maintain scalable applications.",
    companyLink: "https://www.theaccessgroup.com/en-gb/",
    tech: [
      "Python",
      "AWS Lambda",
      "Azure",
      "AWS EC2",
      "DynamoDB",
      "API Gateway",
      "FastAPI",
      "S3",
      "EFS",
      "MongoDB",
      "GitHub",
      "CI/CD",
      "Redis",
    ],
  },
  {
    title: "Owy Technosys",
    position: "Jr. Software Developer",
    time: "Oct 2022 - June 2023",
    location: "Surat, Gujarat",
    description:
      "Worked as a Full Stack Developer with a primary focus on Node.js backend development. Built and maintained RESTful APIs, managed database interactions, and collaborated with the team to integrate frontend and backend services.",
    companyLink: "https://www.owytechnosys.com/",
    tech: [
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
      "MongoDB",
      "Git",
    ],
  },
  {
    title: "Owy Technosys",
    position: "Software Services Support",
    time: "Sept 2021 - Sept 2022",
    location: "Surat, Gujarat",
    description:
      "Provided software support and troubleshooting for clients. Handled communication to resolve issues effectively and ensured client satisfaction with software services.",
    companyLink: "https://www.owytechnosys.com/",
    tech: ["Technical Support", "Client Communication", "Troubleshooting"],
  },
];
