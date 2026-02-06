import { useState, useEffect } from "react";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { FiMoreHorizontal, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Exp.", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={styles.heading}>
      <MyLinks />

      <div className={styles.navWrapper}>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.navMenu}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setSelected(link.id);
                    setIsOpen(false);
                  }}
                  className={selected === link.id ? styles.selected : ""}
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size="2.4rem" /> : <FiMoreHorizontal size="2.4rem" />}
        </button>

        <OutlineButton onClick={() => window.open("/Krishnakant_Mishra_Resume.pdf")}>
          My resume
        </OutlineButton>
      </div>
    </header>
  );
};
