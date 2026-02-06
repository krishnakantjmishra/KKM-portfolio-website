import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Krishnakant Mishra, a Backend Engineer with a strong computer science background and practical experience building cloud-native backend systems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I hold a BSc and MSc in Computer Science and started my industry journey during my MSc by working part-time at a tech company, where I gained experience with Node.js, Express, and frontend integration. I later completed a 6-month internship focused on Python and AWS, and continued working as a full-time backend developer.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My professional experience includes building and maintaining Core APIs, implementing backend business logic, and working extensively with AWS services such as Lambda, DynamoDB, API Gateway, S3, and EFS. I&apos;ve been involved in designing backend workflows with a strong emphasis on scalable, performance, and reliability.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              In addition to core backend development, I&apos;ve worked with FastAPI, Redis, MongoDB, GitHub-based workflows, and CI/CD pipelines, and have exposure to Azure and cloud deployment practices.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of my professional role, I build and deploy end-to-end projects using Django, FastAPI, PostgreSQL, Docker, and AWS EC2, where I handle backend architecture, database design, containerization, and deployment.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently focused on strengthening backend architecture, cloud-native development, and DevOps fundamentals, with the goal of growing into a Backend + DevOps specialist capable of building and operating production-grade systems.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
