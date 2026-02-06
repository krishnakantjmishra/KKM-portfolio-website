import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
            <span className="chip">AWS</span>
            <span className="chip">AWS Lambda</span>
            <span className="chip">DynamoDB</span>
            <span className="chip">API Gateway</span>
            <span className="chip">AWS S3</span>
            <span className="chip">Azure</span>
            <span className="chip">Redis</span>
            <span className="chip">Docker</span>
            <span className="chip">Linux</span>
            <span className="chip">Postman</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">CI/CD</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Project Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Django</span>
            <span className="chip">React</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Postgres</span>
            <span className="chip">AWS EC2</span>
            <span className="chip">AWS S3</span>
            <span className="chip">Nginx</span>
            <span className="chip">Gunicorn</span>
            <span className="chip">Docker</span>
            <span className="chip">SMTP Mail</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Tailwind CSS</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
