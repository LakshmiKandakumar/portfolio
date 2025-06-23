import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>ACHIEVEMENTS</h3>
              <p>• Winner – Code Bounty, St. Joseph’s Institute of Technology (2024)<br />
  • Top 3 Performer – She Codes, Intra-college coding event (2024)<br />
  • 3rd Place – Integration Bee (Math Club Competition, 2023)<br />
  • Consolation Prize – Science Day Competition with cash award (2022)

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>TECHNICAL PRESENCE</h3>
              <p>
                • LeetCode: <a href="https://leetcode.com/u/_lakshmi_24/" target="_blank">leetcode.com/u/_lakshmi_24/</a><br />
  • GitHub: <a href="https://github.com/LakshmiKandakumar" target="_blank">github.com/LakshmiKandakumar</a><br />
  • LinkedIn: <a href="https://www.linkedin.com/in/lakshmi-k24" target="_blank">linkedin.com/in/lakshmi-k24</a><br />
  • Skillrack: <a href="http://www.skillrack.com/profile/406094/8c17a128519daeabe1fef915c9bcc0ed2644a5b1" target="_blank">Skillrack Profile</a>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>CERTIFICATIONS</h3>
              <p>
                • NPTEL – Deep Learning (Successfully Completed)<br />
  • NPTEL – Data Science using Python (Elite + Silver)<br />
  • NPTEL – Enhancing Soft Skills & Personality (Elite + Silver)<br />
  • Infosys Springboard – AI Foundation (Proctored)<br />
  • Infosys Springboard – AI Primer (Proctored)<br />
  • Microsoft – Azure Fundamentals<br />
  • Oracle – AI Vector Search Certified Professional

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
