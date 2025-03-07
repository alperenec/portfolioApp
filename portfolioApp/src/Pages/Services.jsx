import React from "react";
import servicescss from "./Services.module.css";

// Görselleri import ediyoruz
import img1 from "../assets/1.png";
import imgAlperen from "../assets/alperenemrecandan.jpg";
import imgProj1 from "../assets/proj1.png";
import imgProj2 from "../assets/proj2.png";
import imgRecentPortfolio from "../assets/recentPortfolio.png";
import imgRecentPortfolio2 from "../assets/recentPortfolio2.png";

function Services() {
  return (
    <section id="services" className={servicescss.services_section}>
      <div className={servicescss.container}>
        <h2>Transforming Ideas into Exceptional</h2>
        <p className={servicescss.section_description}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
        <div className={servicescss.service_grid}>
          {/* Hizmet 1 */}
          <div className={servicescss.service_item}>
            <img
              src={img1}
              alt="Service 1"
              className={servicescss.service_image}
            />
            <div className={servicescss.overlay}>
              <h3>Web Development</h3>
              <p>Building high-quality web applications with React & Vite.</p>
            </div>
            <div className={servicescss.curtain}></div> {/* Sarı perde */}
          </div>
          {/* Hizmet 2 */}
          <div className={servicescss.service_item}>
            <img
              src={imgProj1}
              alt="Service 2"
              className={servicescss.service_image}
            />
            <div className={servicescss.overlay}>
              <h3>UI/UX Design</h3>
              <p>Creating beautiful and user-friendly interfaces.</p>
            </div>
            <div className={servicescss.curtain}></div> {/* Sarı perde */}
          </div>
          {/* Hizmet 3 */}
          <div className={servicescss.service_item}>
            <img
              src={imgRecentPortfolio}
              alt="Service 3"
              className={servicescss.service_image}
            />
            <div className={servicescss.overlay}>
              <h3>SEO Optimization</h3>
              <p>Helping websites rank higher on search engines.</p>
            </div>
            <div className={servicescss.curtain}></div> {/* Sarı perde */}
          </div>
          {/* Hizmet 4 */}
          <div className={servicescss.service_item}>
            <img
              src={imgAlperen}
              alt="Service 4"
              className={servicescss.service_image}
            />
            <div className={servicescss.overlay}>
              <h3>Web Development</h3>
              <p>Building high-quality web applications with React & Vite.</p>
            </div>
            <div className={servicescss.curtain}></div> {/* Sarı perde */}
          </div>
          {/* Hizmet 5 */}
          <div className={servicescss.service_item}>
            <img
              src={imgRecentPortfolio2}
              alt="Service 5"
              className={servicescss.service_image}
            />
            <div className={servicescss.overlay}>
              <h3>UI/UX Design</h3>
              <p>Creating beautiful and user-friendly interfaces.</p>
            </div>
            <div className={servicescss.curtain}></div> {/* Sarı perde */}
          </div>
          {/* Hizmet 6 */}
          <div className={servicescss.service_item}>
            <img
              src={imgProj2}
              alt="Service 6"
              className={servicescss.service_image}
            />
            <div className={servicescss.overlay}>
              <h3>SEO Optimization</h3>
              <p>Helping websites rank higher on search engines.</p>
            </div>
            <div className={servicescss.curtain}></div> {/* Sarı perde */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
