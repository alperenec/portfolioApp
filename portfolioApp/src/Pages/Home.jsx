import React from "react";
import homecss from "./Home.module.css";
import myImage from "../assets/alperenemrecandan.jpg";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si";

function Home() {
  return (
    <div className={homecss.container}>
      <div className={homecss.home_wrapper}>
        <div className={homecss.home_content}>
          <small>Web Developer</small>
          <h2>
            Alperen Emre <span>Candan</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam
            modi dolore, deserunt illo recusandae explicabo quisquam corrupti
            facere, tempore architecto, officia facilis corporis id non.
            Possimus adipisci nam libero?
          </p>
          <button>
            View portfolio <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className={homecss.home_image}>
          <img src={myImage} alt="alperenemrecandan" />

          <div className={homecss.orbit_container}>
            <FaReact className={homecss.home_image_icon} />
            <FaNodeJs className={homecss.home_image_icon} />
            <FaHtml5 className={homecss.home_image_icon} />
            <FaCss3Alt className={homecss.home_image_icon} />
            <SiTailwindcss className={homecss.home_image_icon} />
            <FaJava className={homecss.home_image_icon} />
            <FaSass className={homecss.home_image_icon} />
            <SiPostgresql className={homecss.home_image_icon} />
            <SiMongodb className={homecss.home_image_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
