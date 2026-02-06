import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";
import Link from "next/link";
import { AiOutlineExport } from "react-icons/ai";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  companyLink?: string;
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  companyLink,
}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>
            {title}
            {companyLink && (
              <Link href={companyLink} target="_blank" rel="nofollow" style={{ marginLeft: "1.2rem", display: "inline-flex", alignItems: "center" }}>
                <AiOutlineExport size="1.8rem" color="var(--brand)" />
              </Link>
            )}
          </span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
