import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import { CollegeProjectsModal } from "./CollegeProjectsModal";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Projects = () => {
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const featuredProjects = projects.slice(0, 2);
  const collegeProjects = projects.slice(2);

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {featuredProjects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>

      <div style={{ marginTop: "3.2rem", display: "flex", justifyContent: "center" }}>
        <OutlineButton onClick={() => setIsCollegeModalOpen(true)}>
          View College Projects <AiOutlineArrowRight />
        </OutlineButton>
      </div>

      <CollegeProjectsModal
        isOpen={isCollegeModalOpen}
        setIsOpen={setIsCollegeModalOpen}
        projects={collegeProjects}
      />
    </section>
  );
};

const projects = [
  {
    title: "SwiftBook Hospitality Platform",
    imgSrc: "/Project2.png",
    code: "https://github.com/krishnakantjmishra",
    projectLink: "https://www.swiftbook.io/inst/#/home?propertyId=2",
    tech: ["Python", "AWS Lambda", "API Gateway", "DynamoDB", "FastAPI"],
    description:
      "Backend developer for a production-level hospitality management platform. Engineered scalable RESTful APIs and serverless workflows to manage real-time bookings, dynamic inventory, and pricing for multiple properties.",
    modalContent: (
      <>
        <p>
          This system handles high-traffic booking workflows with transaction
          consistency and availability logic to prevent overbooking. I leveraged
          AWS Lambda and DynamoDB for a scalable, serverless architecture,
          optimized database queries for sub-second search performance, and
          implemented robust monitoring via CloudWatch for production stability.
        </p>
        <p>
          Key features include hotel & room listing with dynamic availability,
          real-time booking and cancellation APIs, and seamless pricing and
          inventory synchronization.
        </p>
      </>
    ),
  },
  {
    title: "Hotel Booking System",
    imgSrc: "/Hotelprojectss.png",
    code: "https://github.com/krishnakantjmishra",
    projectLink: "http://16.171.138.117/",
    tech: ["Django", "React", "AWS S3", "Nginx", "PostgreSQL"],
    description:
      "Designed and developed a robust hotel booking system. Features include a login-free booking flow for users and a secure admin dashboard for managing hotels, rooms, and bookings.",
    modalContent: (
      <>
        <p>
          Key technical achievements include optimizing image storage with AWS S3
          (with support for HEIC/AVIF formats), implementing a secure login
          system for admins using simple-JWT, and deploying the application on
          AWS EC2 with Nginx and Gunicorn.
        </p>
        <p>
          The backend is built with Django Rest Framework, while the frontend
          utilizes React for a dynamic and responsive user experience.
        </p>
      </>
    ),
  },
  {
    title: "Online Job Portal",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://github.com",
    projectLink: "#",
    tech: ["C# .NET", "MySQL"],
    description:
      "Developed a comprehensive Online Job Portal connecting job seekers with potential employers. The platform features a user-friendly interface for browsing job listings, advanced search filtering, and secure application tracking. Implemented role-based authentication using C# .NET, ensuring secure access for both admins and users. The backend manages complex data relationships via MySQL, handling thousands of user profiles and job postings efficiently.",
    modalContent: (
      <>
        <p>
          The platform features a user-friendly interface for browsing job
          listings, advanced search filtering, and secure application tracking.
        </p>
        <p>
          Implemented role-based authentication using C# .NET, ensuring secure
          access for both admins and users. The backend manages complex data
          relationships via MySQL, handling thousands of user profiles and job
          postings efficiently.
        </p>
      </>
    ),
  },
  {
    title: "Medicine Donate System",
    imgSrc: "/project-imgs/agency-iron-crm.png",
    code: "https://github.com",
    projectLink: "#",
    tech: ["Java Enterprise", "MySQL"],
    description:
      "Built a Medicine Donation System to bridge the gap between donors and NGOs. This Java Enterprise application facilitates the donation of unused medicines to those in need, streamlining inventory management for charitable organizations. Features include a real-time dashboard for tracking medicine requests, automated expiry checking, and a secure donation workflow backed by a robust MySQL database.",
    modalContent: (
      <>
        <p>
          This Java Enterprise application facilitates the donation of unused
          medicines to those in need, streamlining inventory management for
          charitable organizations.
        </p>
        <p>
          Features include a real-time dashboard for tracking medicine requests,
          automated expiry checking, and a secure donation workflow backed by a
          robust MySQL database.
        </p>
      </>
    ),
  },
  {
    title: "Online Music System",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://github.com",
    projectLink: "#",
    tech: ["PHP", "MySQL"],
    description:
      "Created an immersive Online Music System allowing users to stream, download, and manage their music libraries. The application mimics modern streaming services with a dark-mode UI and seamless playback controls. Powered by PHP and MySQL, the system supports dynamic playlist creation, admin-managed content uploads, and efficient media streaming capabilities.",
    modalContent: (
      <>
        <p>
          The application mimics modern streaming services with a dark-mode UI
          and seamless playback controls.
        </p>
        <p>
          Powered by PHP and MySQL, the system supports dynamic playlist
          creation, admin-managed content uploads, and efficient media streaming
          capabilities.
        </p>
      </>
    ),
  },
];
