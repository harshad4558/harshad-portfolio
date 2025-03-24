import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

// Typewriter Component 
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <h1 className={styles.title}>{displayedText}</h1>;
};

// Hero Component
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Use TypewriterText Component */}
        <TypewriterText text="Hi, I'm Harshad Patil" speed={100} />
        
        <p className={styles.description}>
        I'm a Web Developer with experience in React and Node.js. I'm continuously learning and building projects to enhance my skills.
        </p>
        
        <a 
          href="mailto:hcpatil2324@gmail.com?subject=Inquiry&body=Hello%20Harshad" 
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img 
        src={getImageUrl('hero/hero1.png')} 
        alt="heroImg" 
        className={styles.heroImg} 
      />
      
      <div className={styles.TopBlur} />
      <div className={styles.BottomBlur} />
    </section>
  );
};
