import React from "react";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsChevronDown, BsCheck2Circle, BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { FiSearch, FiPhoneCall, FiInstagram } from "react-icons/fi";
import Bootstrap from "react-bootstrap";
import { Data } from "../../Components/Testimonials/Data";
import logo from "../../Assets/images/logo-light.png";
import Mobile from "../../Components/MobMenu/Mobile";
import about13 from "../../Assets/images/about13.jpg";
import about7 from "../../Assets/images/about7.jpg";
import about9 from "../../Assets/images/about9.jpg";
import about14 from "../../Assets/images/about14.jpg";
import Carousel1 from "../../Components/Carousel 1/carousel";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Accordian from "../../Components/Accordian/Accordian";

function Home() {
  return (
    <div className="main">
      <nav className="header w-100 h-15 py-3 d-flex">
        <div className="imglogo-menu w-25 d-flex justify-content-center align-items-center">
          <div className="mobile-carrier">
            <Mobile />
          </div>
          <a href="#">
            <img className="logoimg" src={logo} alt="logo image" />
          </a>
        </div>
        <div className="menu-items w-50 pl-5 d-flex justify-content-start align-items-center">
          <a
            className="mx-3 text-decoration-none text-nowrap text-light fw-bold"
            href="#"
          >
            Deoms <BsChevronDown color="white" size="1em" />
          </a>
          <a
            className="mx-3 text-decoration-none text-nowrap text-light fw-bold"
            href="#"
          >
            Pages <BsChevronDown color="white" size="1em" />
          </a>
          <a
            className="mx-3 text-decoration-none text-nowrap text-light fw-bold"
            href="#"
          >
            Projects <BsChevronDown color="white" size="1em" />
          </a>
          <a
            className="mx-3 text-decoration-none text-nowrap text-light fw-bold"
            href="#"
          >
            Blog <BsChevronDown color="white" size="1em" />
          </a>
          <a
            className="mx-3 text-decoration-none text-nowrap text-light fw-bold"
            href="#"
          >
            Blocks <BsChevronDown color="white" size="1em" />
          </a>
          <a
            className="mx-3 text-decoration-none text-nowrap text-light fw-bold"
            href="#"
          >
            Decoumentation <BsChevronDown color="white" size="1em" />
          </a>
        </div>
        <div className="search-contactbtn w-25 d-flex justify-content-center align-items-center">
          <FiSearch color="white" />
          <button className="main-btns fw-bold">Contact</button>
        </div>
      </nav>

      {/* HERO SECTION  or SECTION 1 */}
      <div className="section1main">
        <div className="section1 w-100 d-flex ">
          <div className="s1col1 w-50 d-flex flex-column justify-content-start align-items-start text-light">
            <h1>Sandbox focuses on</h1>
            <h3>Customer Setifaction</h3>
            <h2>
              We carefully consider our solutions to support each and every
              stage of your growth.
            </h2>
            <button className="main-btns fw-bold">Get Started</button>
          </div>
          <div className="s1col2 w-50"></div>
        </div>
        <div className="s1col3">
          <img className="fluid-img" src={about13} alt="image" />
        </div>
      </div>

      {/* SECTION 2  */}
      <div className="section2 w-100 h-50">
        <div className="s2col1 h-25">
          <h3>... What We Do ?</h3>
          <h2>
            The service we offer is specifically designed to meet your needs.
          </h2>
        </div>
        <div className="s2col2 w-100 h-75 d-flex px-3 align-items-center justify-content-between">
          <div className="s2card ">
            <FiPhoneCall color="#54A8C7" size="1.5em" />
            <h2>24/7 Support</h2>
            <h3>
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </h3>
            <button>Learn More</button>
          </div>
          <div className="s2card">
            <FiPhoneCall color="#54A8C7" size="1.5em" />
            <h2>24/7 Support</h2>
            <h3>
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </h3>
            <button>Learn More</button>
          </div>
          <div className="s2card">
            <FiPhoneCall color="#54A8C7" size="1.5em" />
            <h2>24/7 Support</h2>
            <h3>
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </h3>
            <button>Learn More</button>
          </div>
          <div className="s2card">
            <FiPhoneCall color="#54A8C7" size="1.5em" />
            <h2>24/7 Support</h2>
            <h3>
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus. Cras justo.
            </h3>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      {/* SECTION 3 STARTS FROM   HERE  */}
      <div className="section3">
        <div className="s3col1 w-50 h-100 d-flex align-items-center justify-content-center">
          <img src={about7} alt="image" />
          <div className="s3imgbackground"></div>
        </div>
        <div className="s3col2 w-50 h-100 d-flex flex-column align-items-start justify-content-center ">
          <h3>... HOW IT WORKS?</h3>
          <h2>Here are the 3 working steps on success.</h2>
          <div className="s3card d-flex flex-row">
            <div className="s3cardiconbox">
              <BsCheck2Circle color="#54A8C7" size="1.5em" />
            </div>
            <div className="s3cardcontentbox w-75 d-flex flex-column">
              <h2>Collect Ideas</h2>
              <h3>
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </h3>
            </div>
          </div>
          <div className="s3card d-flex flex-row">
            <div className="s3cardiconbox">
              <BsCheck2Circle color="#54A8C7" size="1.5em" />
            </div>
            <div className="s3cardcontentbox w-75 d-flex flex-column">
              <h2>Collect Ideas</h2>
              <h3>
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </h3>
            </div>
          </div>
          <div className="s3card d-flex flex-row">
            <div className="s3cardiconbox">
              <BsCheck2Circle color="#54A8C7" size="1.5em" />
            </div>
            <div className="s3cardcontentbox w-75 d-flex flex-column">
              <h2>Collect Ideas</h2>
              <h3>
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 STARTS  */}
      <div className="section4">
        <div className="s4col2 w-50h-100 d-flex flex-column align-items-start justify-content-start ">
          <h3>... HOW IT WORKS?</h3>
          <h2>Here are the 3 working steps on success.</h2>
          <div className="s4-accordian">
            <Accordian />
          </div>
        </div>
        <div className="s4col1 w-50 h-100 d-flex align-items-center justify-content-center">
          <img src={about9} alt="image" />
          <div className="s4imgbackground"></div>
        </div>
      </div>

      {/* SECTION 5 STARTS FROM HERE  */}
      <div className="section5 w-100 h-75 d-flex align-items-center">
        <div className="section5slice w-100 h-100">
          <div className="s5col1 w-50 h-100 d-flex flex-column justify-content-center">
            <h3>... JOIN OUR COMMUNITY</h3>
            <h2>
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            </h2>
            <button className="s5col1-btn">join us</button>
          </div>
        </div>
      </div>

      {/* SECTION 6 STARTS FROM HERE  */}
      <div className="section6 w-100">
        <div className="s6col1 w-75 h-25 d-flex flex-column justify-content-center">
          <h3>... CASE STUDIES</h3>
          <h2>
            Check out some of our awesome projects with creative ideas and great
            design.
          </h2>
        </div>

        {/* section 6 Carousel  */}
        <Carousel1 />
      </div>

      {/* SECTION 7 TESTIMONIALS  */}
      <div className="section7 w-100 py-5 d-flex flex-column">
        <div className="s7col1 w-100 d-flex flex-row align-items-start">
          <div className="s7col1-part1 w-25 h-50 d-flex flex-column justify-content-end">
            <h3>... COMPANY FACTS</h3>
            <h2>We are proud of our works</h2>
          </div>
          <div className="s7col1-part2 w-75 h-50 d-flex flex-row justify-content-center align-items-end">
            <div className="s7col1-card d-flex flex-column align-items-center">
              <h2>1000+</h2>
              <h3>Completed Projects</h3>
            </div>
            <div className="s7col1-card mx-5 d-flex flex-column align-items-center">
              <h2>500+</h2>
              <h3>Happy Clients</h3>
            </div>
            <div className="s7col1-card mx-5 d-flex flex-column align-items-center">
              <h2>150+</h2>
              <h3>Awards Won</h3>
            </div>
          </div>
        </div>
        {/* Section 7 testmonial  */}
        <div>
          <Testimonials Slides={Data} />
        </div>
      </div>

      {/* SECTION 8 STARTS from HERE  */}
      <div className="section8">
        <div className="s8col1 w-50 h-100 d-flex align-items-center justify-content-center">
          <img src={about14} alt="image" />
          <div className="s8imgbackground"></div>
        </div>
        <div className="s8col2 w-50 h-100 d-flex flex-column align-items-start justify-content-center ">
          <h3>... HOW IT WORKS?</h3>
          <h2>Here are the 3 working steps on success.</h2>
          <div className="s8card d-flex flex-row">
            <div className="s8cardiconbox">
              <BsCheck2Circle color="#54A8C7" size="1.5em" />
            </div>
            <div className="s8cardcontentbox w-75 d-flex flex-column">
              <h2>Address</h2>
              <h3>Moonshine St. 14/05 Light City, London, United Kingdom</h3>
            </div>
          </div>
          <div className="s8card d-flex flex-row">
            <div className="s8cardiconbox">
              <BsCheck2Circle color="#54A8C7" size="1.5em" />
            </div>
            <div className="s8cardcontentbox w-75 d-flex flex-column">
              <h2>Phone</h2>
              <h3>00 (123) 456 78 90</h3>
            </div>
          </div>
          <div className="s8card d-flex flex-row">
            <div className="s8cardiconbox">
              <BsCheck2Circle color="#54A8C7" size="1.5em" />
            </div>
            <div className="s8cardcontentbox w-75 d-flex flex-column">
              <h2>Email</h2>
              <h3>sandbox@email.com</h3>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER STARTS FROM HERE  */}
      <div className="footer-clipper w-100">
        <div className="footer w-100 d-flex justify-content-between align-items-start">
          <div className="fcol d-flex flex-column p-5">
            <img src={logo} alt="logo image" />
            <h4>Ⓒ 2022 Sandbox.</h4>
            <h4>All Rights Reserved</h4>
            <div className="social-icons mt-2 d-flex flex-row align-items-center justify-content-between">
              <AiOutlineTwitter color="white" size="1em" />
              <TiSocialFacebook color="white" size="1.3em" />
              <FiInstagram color="white" size="1em" />
              <BsYoutube color="white" size="1em" />
            </div>
          </div>
          <div className="fcol d-flex flex-column p-5">
            <h2>Get in Touch</h2>
            <h3>Moonshine St. 14/05 Light City, London, United Kingdom</h3>
            <h4>info@email.com</h4>
            <h4>00 (123) 456 78 90</h4>
          </div>
          <div className="fcol d-flex flex-column p-5">
            <h2>Learn More</h2>
            <h4>
              <a href="#">About Us</a>
            </h4>
            <h4>
              <a href="#">Our Story</a>
            </h4>
            <h4>
              <a href="#">Projects</a>
            </h4>
            <h4>
              <a href="#">Terms of Use</a>
            </h4>
            <h4>
              <a href="#">Privacy Policy</a>
            </h4>
          </div>
          <div className="fcol4 d-flex flex-column p-5">
            <h2>Our News Letter</h2>
            <h4>
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </h4>
            <div className="form">
              <input type="Email" placeholder="Email Address" />
              <input type="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
