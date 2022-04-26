import React, { useState, useEffect } from "react";
import "./Mobilemenu.css";
import { FiMenu } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

function Mobile() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let menu;

  if (showMenu) {
    menu = (
      <>
        <div
          data-aos="fade-right"
          className="menu-items-mobile d-flex flex-column justify-content-start align-items-center"
        >
          <div className="closing-menu w-100 d-flex align-items-center justify-content-between">
            <h2>Menu</h2>{" "}
            <FiMenu
              className="zindex-dropdown"
              color="black"
              onClick={() => setShowMenu(!showMenu)}
              size="2em"
            />
          </div>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            Home
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            About
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            Services
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            Work
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            Client
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            Contact
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="mmicon d-lg-none">
      <FiMenu
        className="zindex-dropdown"
        color="white"
        onClick={() => setShowMenu(!showMenu)}
        size="2em"
      />
      <div className="menubar d-flex flex-column text-light">{menu}</div>
    </div>
  );
}

export default Mobile;
