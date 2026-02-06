import { SectionHeader } from "@/components/utils/SectionHeader";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./education.module.scss";

export const Education = () => {
    return (
        <section className="section-wrapper" id="education">
            <SectionHeader title="Education" dir="r" />
            <div className={styles.education}>
                {education.map((item) => (
                    <div key={item.title} className={styles.itemWrapper}>
                        <div className={styles.heading}>
                            <Reveal>
                                <span className={styles.title}>{item.title}</span>
                            </Reveal>
                            <Reveal>
                                <span>{item.location}</span>
                            </Reveal>
                        </div>
                        <div className={styles.heading}>
                            <Reveal>
                                <span className={styles.degree}>{item.degree}</span>
                            </Reveal>
                            <Reveal>
                                <span>{item.time}</span>
                            </Reveal>
                        </div>
                        <Reveal>
                            <p className={styles.description}>{item.description}</p>
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    );
};

const education = [
    {
        title: "J.P.Dawar Institute of information science and technology (VNSGU)",
        time: "2022 - 2024",
        degree: "Msc ICT",
        location: "Surat, Gujarat",
        description: "Focusing on advanced information and communication technologies.",
    },
    {
        title: "Shree Ramkrishna Institute of Computer Education and Applied Sciences",
        time: "2019 - 2022",
        degree: "Bsc Computer Science",
        location: "Athwagate, Surat",
        description: "Completed with distinction. Foundations in software engineering and data structures.",
    },
    {
        title: "M T Jariwala High School",
        time: "2017 - 2019",
        degree: "HSC (Science - Maths Stream)",
        location: "Athwagate, Surat",
        description: "Focusing on core science and mathematics.",
    },
];
