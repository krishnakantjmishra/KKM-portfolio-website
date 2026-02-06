import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/krishnakant-mishra-0294b5263/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactEmailWrapper}>
            <Link href="mailto:krishnakantmishra.dev@gmail.com">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <span>Send Email</span>
              </div>
            </Link>
            <Link href="tel:+918732916693">
              <div className={styles.contactPhone}>
                <span>+91 8732916693</span>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
