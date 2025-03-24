import React, { useRef } from "react";
import styles from "./App.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/project/Projects";
import { Contact } from "./components/Contact/Contact";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 1], [0, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  );
}

export default App;
