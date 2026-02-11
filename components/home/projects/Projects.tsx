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
    description: (
      <>
        Backend developer for a production-level hospitality management platform scaling to <b>5000+ hotels</b>.
        Architected an end-to-end booking system and engineered core modules including <b>MemberRate, TravelAgent, and GuestwiseRate</b> using <b>Python and AWS Lambda</b>.
      </>
    ),
    modalContent: (
      <>
        <p>
          I architected and developed a comprehensive end-to-end hotel booking
          system that manages the entire lifecycle from search to final
          confirmation. This platform facilitates direct reservations and
          revenue growth for <span style={{ color: "var(--brand)" }}>5000+ hotels</span> globally.
        </p>
        <p>
          Key contributions include engineered core business logic for
          <b> MemberRate</b>, <b>TravelAgent</b>, and <b>GuestwiseRate</b>
          modules, enabling tiered pricing, specialized agent workflows, and
          guest-specific booking rules. I leveraged <b>AWS Lambda</b> for serverless microservices and implemented <b>Redis</b> caching for sub-second search
          performance.
        </p>
      </>
    ),
  },
  {
    title: "Hotel Booking System",
    imgSrc: "/Hotelprojectss.png",
    code: "https://github.com/krishnakantjmishra",
    projectLink: "http://16.171.138.117/",
    tech: ["Django", "React", "AWS S3", "AWS EC2", "Nginx", "PostgreSQL"],
    description: (
      <>
        Developed a full-stack system featuring an <b>OTP-based login-free</b> booking flow.
        Leveraged <b>AWS S3</b> for storage and deployed on <b>AWS EC2</b> with <b>Nginx and Gunicorn</b>.
      </>
    ),
    modalContent: (
      <>
        <p>
          Key technical achievements include optimizing image storage with <b>AWS S3</b>
          (with support for HEIC/AVIF formats), implementing a secure login
          system for admins using <b>JWT</b>, and deploying the application on
          <b> AWS EC2</b> with Nginx and Gunicorn.
        </p>
        <p>
          The backend is built with <b>Django Rest Framework</b>, while the frontend
          utilizes <b>React</b> for a dynamic and responsive user experience.
        </p>
      </>
    ),
  },
  {
    title: "BullTrade Stock Simulator",
    imgSrc: "/Project3.png",
    code: "https://github.com/krishnakantjmishra",
    projectLink: "",
    tech: ["Node.js", "React", "WebSockets", "Socket.io", "Express"],
    description: (
      <>
        Real-time stock trading simulator featuring <b>live ticker updates</b> and interactive charts.
        Leveraged <b>WebSockets</b> for low-latency data streaming and virtual portfolio management.
      </>
    ),
    modalContent: (
      <>
        <p>
          BullTrade is a high-performance stock market simulator designed to
          provide users with a <b>real-time trading</b> experience. I developed the
          complete backend using <b>Node.js and Express</b>, implementing a custom
          <b> WebSocket</b> server to stream live market data (LTP) to the
          frontend.
        </p>
        <p>
          The frontend is built with <b>React</b> and features interactive technical
          charts and a responsive trading terminal. Key
          functionalities include <b>virtual portfolio tracking</b> with live P&L
          updates and trade execution.
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
    description: (
      <>
        Developed a comprehensive <b>Online Job Portal</b> featuring role-based authentication and secure application tracking.
        Managed complex data relationships via <b>MySQL</b> for thousands of profiles.
      </>
    ),
    modalContent: (
      <>
        <p>
          The platform features a user-friendly interface for browsing job
          listings, advanced search filtering, and secure application tracking.
        </p>
        <p>
          Implemented <b>role-based authentication</b> using <b>C# .NET</b>, ensuring secure
          access for both admins and users. The backend manages complex data
          relationships via <b>MySQL</b>, handling thousands of user profiles and job
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
    description: (
      <>
        Built a <b>Medicine Donation System</b> to bridge the gap between donors and NGOs.
        Facilitated inventory tracking and secure donation workflows using <b>Java Enterprise</b>.
      </>
    ),
    modalContent: (
      <>
        <p>
          This <b>Java Enterprise</b> application facilitates the donation of unused
          medicines to those in need, streamlining inventory management for
          charitable organizations.
        </p>
        <p>
          Features include a real-time dashboard for tracking medicine requests,
          <b> automated expiry checking</b>, and a secure donation workflow backed by a
          robust <b>MySQL</b> database.
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
    description: (
      <>
        Created an immersive <b>Online Music System</b> with dynamic playlist creation and media streaming.
        Built with <b>PHP and MySQL</b>, featuring a dark-mode UI and seamless playback.
      </>
    ),
    modalContent: (
      <>
        <p>
          The application mimics modern streaming services with a dark-mode UI
          and seamless playback controls.
        </p>
        <p>
          Powered by <b>PHP and MySQL</b>, the system supports dynamic playlist
          creation, admin-managed content uploads, and efficient media streaming
          capabilities.
        </p>
      </>
    ),
  },
];
