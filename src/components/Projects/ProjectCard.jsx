import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, screenshot },
}) => {
  const [showScreenshot, setShowScreenshot] = useState(false);

  const handleToggle = () => {
    setShowScreenshot((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    <div className={styles.links}>
  {/* Demo OR Screenshot Button */}
  {demo ? (
    <a
      href={demo}
      className={styles.link}
      target="_blank"
      rel="noreferrer"
    >
      Demo
    </a>
  ) : screenshot ? (
    <button
      onClick={handleToggle}
      className={styles.link}
    >
      {showScreenshot ? "Hide Screenshot" : "Screenshot"}
    </button>
  ) : null}

  {/* Source is always shown */}
  <a
    href={source}
    className={styles.link}
    target="_blank"
    rel="noreferrer"
  >
    Source
  </a>
</div>

         
      {!demo && screenshot && showScreenshot && (
        <img
          src={getImageUrl(screenshot)}
          alt={`${title} Screenshot`}
          className={styles.screenshot}
        />
      )}
    </div>
  );
};
