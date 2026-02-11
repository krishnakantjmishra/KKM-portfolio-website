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
    description: (
      <>
        <b>Architected</b> core backend logic for <b>MemberRate, TravelAgent, and GuestwiseRate</b> modules, enabling tiered pricing and agent-specific flows.
        Engineered a production-level <b>Hotel Booking System</b> and serverless workflows handling <span style={{ color: "var(--brand)" }}>real-time</span>
        booking and inventory for <b>5000+ hotels</b>. Optimized performance via <b>Redis</b> and maintained robust <b>CI/CD pipelines</b>.
      </>
    ),
    companyLink: "https://www.theaccessgroup.com/en-gb/",
    tech: [
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "FastAPI",
      "S3",
      "EFS",
      "MongoDB",
      "Redis",
      "GitHub",
      "CI/CD",
      "Azure",
      "AWS EC2",
    ],
  },
  {
    title: "Owy Technosys",
    position: "Jr. Software Developer",
    time: "Oct 2022 - June 2023",
    location: "Surat, Gujarat",
    description: (
      <>
        Developed and maintained <b>scalable RESTful APIs</b> using <b>Node.js, Express, and MongoDB</b>.
        Collaborated on <b>Full Stack</b> initiatives to integrate complex frontend logic with secure backend services,
        improving system efficiency and user engagement.
      </>
    ),
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
    description: (
      <>
        Resolved complex <b>technical issues</b> and provided high-level support for software services.
        Acted as a <b>technical liaison</b> between clients and engineers to ensure 100% resolution of reported bugs.
      </>
    ),
    companyLink: "https://www.owytechnosys.com/",
    tech: ["Technical Support", "Client Communication", "Troubleshooting"],
  },
];
