import React from "react";
import portfoliocss from "./Portfolio.module.css";

// İkonlar için örnek olarak react-icons kütüphanesini kullanabiliriz
// Önce `npm install react-icons` komutuyla kütüphaneyi kurmanız gerekiyor
import { FaEye, FaPaintBrush, FaVideo } from "react-icons/fa";

function Portfolio() {
  return (
    <section id="portfolio" className={portfoliocss.portfolio_section}>
      <div className={portfoliocss.container}>
        <h3 className={portfoliocss.subheading}>My Expertise</h3>
        <h2>Elevated Designs Personalized the Best Experiences</h2>
        <div className={portfoliocss.expertise_grid}>
          {/* Kart 1: UI/Visual Design */}
          <div className={portfoliocss.expertise_item}>
            <div className={portfoliocss.icon_container}>
              <FaEye className={portfoliocss.icon} />
            </div>
            <div className={portfoliocss.content}>
              <div className={portfoliocss.title_wrapper}>
                <h3>UI/Visual Design</h3>
                <span className={portfoliocss.percentage}>50%</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Eos
                sequi harum deleniti reprehenderit et hic, dolores aut
                voluptates totam.
              </p>
            </div>
          </div>
          {/* Kart 2: Branding Design */}
          <div className={portfoliocss.expertise_item}>
            <div className={portfoliocss.icon_container}>
              <FaPaintBrush className={portfoliocss.icon} />
            </div>
            <div className={portfoliocss.content}>
              <div className={portfoliocss.title_wrapper}>
                <h3>Branding Design</h3>
                <span className={portfoliocss.percentage}>60%</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Eos
                sequi harum deleniti reprehenderit et hic, dolores aut
                voluptates totam.
              </p>
            </div>
          </div>
          {/* Kart 3: Motion Design */}
          <div className={portfoliocss.expertise_item}>
            <div className={portfoliocss.icon_container}>
              <FaVideo className={portfoliocss.icon} />
            </div>
            <div className={portfoliocss.content}>
              <div className={portfoliocss.title_wrapper}>
                <h3>Motion Design</h3>
                <span className={portfoliocss.percentage}>70%</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Eos
                sequi harum deleniti reprehenderit et hic, dolores aut
                voluptates totam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
