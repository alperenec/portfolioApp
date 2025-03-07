import React from "react";
import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="about" className={styles.about_section}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <p>
          I am a passionate Web Developer with expertise in modern front-end
          technologies. I love building visually appealing and highly performant
          websites.
        </p>

        <div className={styles.experience_wrapper}>
          <div className={styles.experience_circle}>
            <span className={styles.years}>10+</span>
            <div className={styles.experience_subtext}>
              <span>Year of Experience</span>
            </div>
          </div>
          <div className={styles.experience_text}>
            <h3>UI /UX Designs</h3>
            <div className={styles.experience_subtext}>263+ Projects</div>
          </div>
          {/* Kartları experience_wrapper içine taşıyoruz */}
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.icon_container}>
                <span className={styles.icon}>💼</span>
              </div>
              <h3>Business Solutions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                expedita nemo possimus voluptatibus voluptatem dolorum
                reiciendis eveniet sint eos unde?
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon_container}>
                <span className={styles.icon}>💰</span>
              </div>
              <h3>Profit Partners</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                expedita nemo possimus voluptatibus voluptatem dolorum
                reiciendis eveniet sint eos unde?
              </p>
            </div>
          </div>
        </div>

        <button className={styles.read_more}>Read More →</button>
      </div>
    </section>
  );
}

export default About;
