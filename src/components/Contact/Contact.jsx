import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./contact.module.css"

export const Contact = () => {
  return (
    <footer id='Contact' className={styles.container}>
      <div className={styles.text}>
        <h2 >Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
          <a href="mailto:hcpatil2324@gmail.com">hcpatil234@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
          <a href="https://www.linkedin.com/in/harshad-patil-969196287">linkedin/Harshadpatil</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
          <a href="https://github.com/harshad4558">github.com/Dev.Harsh</a>
        </li>
        
      </ul>
      <div className={styles.designed}>
        <h4> 2025 @ Designed & Developed By</h4><span> Harshad Patil</span>
      </div>
    </footer>
  );
};
