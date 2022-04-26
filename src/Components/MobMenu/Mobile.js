import React, { useState } from "react";
import "./Mobile.scss";
import { FiMenu } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";

function Mobile() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <>
        <div className="menu-items-mobile pl-5 d-flex flex-column justify-content-start align-items-start">
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            <BsCircleFill size="7px" />
            Deoms
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            <BsCircleFill size="7px" />
            Pages
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            <BsCircleFill size="7px" />
            Projects
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            <BsCircleFill size="7px" />
            Blog
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            <BsCircleFill size="7px" />
            Blocks
          </a>
          <a
            className="mx-3 my-2 text-decoration-none text-nowrap text-dark fw-bold"
            href="#"
          >
            <BsCircleFill size="7px" />
            Decoumentation
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="mmicon">
      <FiMenu
        className="zindex-dropdown"
        onClick={() => setShowMenu(!showMenu)}
        size="2em"
      />
      <div className="menubar d-flex flex-column text-light">{menu}</div>
    </div>
  );
}

export default Mobile;
