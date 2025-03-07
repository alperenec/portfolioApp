import React, { useRef } from "react";
import navcss from "./Nav.module.css";
import logo from "../../assets/logo.png";

function Nav() {
  const menu = useRef();
  const menuHandler = () => {
    menu.current.classList.toggle(navcss.showMenu);
  };

  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" width="100" height="100" />
      </div>
      <ul ref={menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={navcss.navBtns}>
        <div className={navcss.social}>
          <i className="ri-github-line"></i>
          <i className="ri-linkedin-line"></i>
          <i className="ri-instagram-line"></i>
        </div>

        <div className={navcss.bars} onClick={menuHandler}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
