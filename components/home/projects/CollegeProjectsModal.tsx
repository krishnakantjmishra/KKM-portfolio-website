import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import styles from "./collegeprojectsmodal.module.scss";

interface Project {
    title: string;
    imgSrc: string;
    code: string;
    projectLink: string;
    tech: string[];
    description: string;
    modalContent: JSX.Element;
}

interface Props {
    isOpen: boolean;
    setIsOpen: Function;
    projects: Project[];
}

export const CollegeProjectsModal = ({ isOpen, setIsOpen, projects }: Props) => {
    useEffect(() => {
        const body = document.querySelector("body");

        if (isOpen) {
            body!.style.overflowY = "hidden";
        } else {
            body!.style.overflowY = "scroll";
        }
    }, [isOpen]);

    if (!isOpen) return <></>;

    const content = (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={styles.modalCard}
            >
                <button
                    className={styles.closeModalBtn}
                    onClick={() => setIsOpen(false)}
                >
                    <MdClose />
                </button>

                <div className={styles.modalHeader}>
                    <h3>College Projects</h3>
                    <p>A collection of academic projects demonstrating core computer science concepts.</p>
                </div>

                <div className={styles.projectList}>
                    {projects.map((project) => (
                        <div key={project.title} className={styles.projectItem}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.imgSrc}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className={styles.projectContent}>
                                <div>
                                    <h4>{project.title}</h4>
                                    <div className={styles.techChips}>
                                        {project.tech.map((t) => (
                                            <span key={t} className={styles.chip}>{t}</span>
                                        ))}
                                    </div>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                                <div className={styles.links}>
                                    <Link href={project.code} target="_blank" rel="nofollow">
                                        <AiFillGithub /> Source Code
                                    </Link>
                                    <Link href={project.projectLink} target="_blank" rel="nofollow">
                                        <AiOutlineExport /> Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );

    // @ts-ignore
    return ReactDOM.createPortal(content, document.getElementById("root"));
};
