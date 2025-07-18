import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lakshmi K</h1>
        <p className={styles.description}>
          Final-year B.Tech AIML student at RMD Engineering College | Skilled in AI, ML, and full-stack development | Seeking entry-level tech roles
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Lakshmi's profile"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
