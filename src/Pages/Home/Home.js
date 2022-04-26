import React, { useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsYoutube,
  BsChevronDown,
  BsBrush,
  BsArrowsAngleContract,
  BsPeace,
  BsChatLeftText,
} from "react-icons/bs";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineArrowUp } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import Mobile from "../../Components/Mobilemenu/Mobilemenu";
import doll from "../../Assets/images/doll.jpg";
import bag from "../../Assets/images/bag.jpg";
import dark from "../../Assets/images/dark.jpg";
import fire from "../../Assets/images/fire.png";
import wooden from "../../Assets/images/wooden.jpg";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="main">
      <section data-aos="fade-down" className="hero pt-3 px-3 pb-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-11 col-md-11 col-lg-5 col-xl-6">
              <a href="#" className="navbar-brand text-secondary fw-bold">
                WELCOME TO GLINT
              </a>
            </div>
            <div className="header-col1 col-1 col-md-1 col-lg-7 col-xl-6 d-lg-flex align-items-end ">
              <Mobile />
              <a href="#" className="nav-link d-none d-lg-block text-light">
                Home
              </a>
              <a href="#" className="nav-link d-none d-lg-block text-light">
                About
              </a>
              <a href="#" className="nav-link d-none d-lg-block  text-light">
                Services
              </a>
              <a href="#" className="nav-link d-none d-lg-block  text-light">
                Work
              </a>
              <a href="#" className="nav-link d-none d-lg-block text-light">
                Clients
              </a>
              <a href="#" className="nav-link d-none d-lg-block text-light">
                Contacts
              </a>
            </div>
          </div>
          <div className="container my-0 mt-3 my-sm-5 pt-5 d-flex align-items-center">
            <div className="row">
              <div className="col-12 col-sm-8 text-center text-sm-start px-0 text-light">
                <h2 className="lh-sm display-3 fw-normal">
                  We are a creative group of people who design influential
                  brands and digital experiences.
                </h2>
              </div>
              <div className="col-12 col-sm-4 px-0 py-2 py-sm-5 d-flex flex-row flex-sm-column justify-content-center align-items-end">
                <AiOutlineTwitter
                  className="mb-5 "
                  color="white"
                  size="1.5em"
                />
                <TiSocialFacebook
                  className="mb-5 ms-3"
                  color="white"
                  size="1.8em"
                />
                <FiInstagram className="mb-5 ms-3" color="white" size="1.5em" />
                <BsYoutube className="mb-5 ms-3" color="white" size="1.5em" />
              </div>
            </div>
          </div>

          <div className="container mt-0 mt-sm-3 mt-md-5 px-0 d-flex justify-content-center d-sm-inline">
            <a
              href="#"
              className="btn md-3 btn-lg btn-outline-light border border-3 "
            >
              Start A Project
            </a>
            <a
              href="#"
              className="btn ms-3 btn-lg btn-outline-light border border-3"
            >
              More About Us
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 STARTS FROM HERE  */}
      <section data-aos="fade-up" className="section2 px-3 py-5">
        <div className="container pt-5 text-center">
          <div className="row pt-3 justify-content-center">
            <div className="col-6">
              <h3 className="fw-bold">Hello There</h3>
              <h2 className="display-4 pb-2 pb-md-5 fw-bold text-light border border-bottom-1 border-top-0 border-start-0 border-end-0 border-light">
                We Are Glint.
              </h2>
            </div>

            <div className="container px-5 my-2 my-md-5">
              <h4 className="px-3 lh-md-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, veniam? Similique reiciendis veritatis sit
                perspiciatis cupiditate porro, quae praesentium labore deserunt
                in ullam sunt eum autem eius ipsum delectus eaque temporibus
                adipisci rem voluptatum. Magni autem aut reiciendis quasi
                distinctio quaerat maiores exercitationem natus unde! Quidem
                nobis fuga hic error!
              </h4>
            </div>

            <div className="container pb-0 pb-md-5 mb-5">
              <div className="row g-4 g-md-0 mt-3 justify-content-center align-items-center">
                <div className="col-6 col-md-3 p-3 border border-top-0 border-bottom-0 border-start-0 border-end-1 border-light align-items-center justify-conent-center">
                  <h1 className="fw-bold display-2 text-light">127</h1>
                  <h3 className="fs-6 fw-bold">Awards Received</h3>
                </div>
                <div className="s2column2 col-6 col-md-3 p-3 border-light align-items-center justify-conent-center">
                  <h1 className="fw-bold display-2 text-light">1505</h1>
                  <h3 className="fs-6 fw-bold">Cups of Coffee</h3>
                </div>
                <div className="col-6 col-md-3 p-3 border border-top-0 border-bottom-0 border-start-0 border-end-1 border-light align-items-center justify-conent-center">
                  <h1 className="fw-bold display-2 text-light">160</h1>
                  <h3 className="fs-6 fw-bold">Projects Completed</h3>
                </div>
                <div className="col-6 col-md-3 p-3 border border-top-0 border-bottom-0 border-start-0 border-end-0 border-light align-items-center justify-conent-center">
                  <h1 className="fw-bold display-2 text-light">120</h1>
                  <h3 className="fs-6 fw-bold">Happy Clients</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 STARTS HERE  */}
      <section data-aos="fade-up" className="section3 my-2 my-md-5 px-3">
        <div className="container pt-5 text-center">
          <div className="row pt-3 justify-content-center">
            <div className="s3col1 col-10">
              <h3 className="fw-bold">What We Do</h3>
              <h2 className="display-5 pb-3 pb-md-5 fw-bold border border-bottom-1 border-top-0 border-start-0 border-end-0 border-dark">
                We have got everything you need to launch and grow your business
              </h2>
            </div>

            <div className="container mt-3 pb-0 pb-md-5 mb-5">
              <div className="row g-4 g-md-0 mt-3">
                {/* CARD 1  */}
                <div data-aos="fade-right" className="col-12 col-md-6 p-3 ">
                  <div className="row">
                    <div className="col-2 mt-2">
                      <BsBrush color="54A8C7" size="2em" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-10 text-start pb-3">
                          <h3 className="fs-3 fw-bold">Brand Identity</h3>
                        </div>
                        <div className="col-12 text-start">
                          <h3 className="fs-6 lh-lg text-muted">
                            Nemo cupiditate ab quibusdam quaerat impedit magni.
                            Earum suscipit ipsum laudantium. Quo delectus est.
                            Maiores voluptas ab sit natus veritatis ut. Debitis
                            nulla cumque veritatis. Sunt suscipit voluptas ipsa
                            in tempora esse soluta sint.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div data-aos="fade-left" className="col-12 col-md-6 p-3 ">
                  <div className="row">
                    <div className="col-2 mt-2">
                      <BsArrowsAngleContract color="54A8C7" size="2em" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-10 text-start pb-3">
                          <h3 className="fs-3 fw-bold">Illustration</h3>
                        </div>
                        <div className="col-12 text-start">
                          <h3 className="fs-6 lh-lg text-muted">
                            Nemo cupiditate ab quibusdam quaerat impedit magni.
                            Earum suscipit ipsum laudantium. Quo delectus est.
                            Maiores voluptas ab sit natus veritatis ut. Debitis
                            nulla cumque veritatis. Sunt suscipit voluptas ipsa
                            in tempora esse soluta sint.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 3  */}
                <div data-aos="fade-right" className="col-12 col-md-6 p-3 ">
                  <div className="row">
                    <div className="col-2 mt-2">
                      <BsPeace color="#54A8C7" size="2em" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-10 text-start pb-3">
                          <h3 className="fs-3 fw-bold">Marketing</h3>
                        </div>
                        <div className="col-12 text-start">
                          <h3 className="fs-6 lh-lg text-muted">
                            Nemo cupiditate ab quibusdam quaerat impedit magni.
                            Earum suscipit ipsum laudantium. Quo delectus est.
                            Maiores voluptas ab sit natus veritatis ut. Debitis
                            nulla cumque veritatis. Sunt suscipit voluptas ipsa
                            in tempora esse soluta sint.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 4 */}
                <div data-aos="fade-left" className="col-12 col-md-6 p-3 ">
                  <div className="row">
                    <div className="col-2 mt-2">
                      <GiWorld color="54A8C7" size="2em" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-10 text-start pb-3">
                          <h3 className="fs-3 fw-bold">Web Design</h3>
                        </div>
                        <div className="col-12 text-start">
                          <h3 className="fs-6 lh-lg text-muted">
                            Nemo cupiditate ab quibusdam quaerat impedit magni.
                            Earum suscipit ipsum laudantium. Quo delectus est.
                            Maiores voluptas ab sit natus veritatis ut. Debitis
                            nulla cumque veritatis. Sunt suscipit voluptas ipsa
                            in tempora esse soluta sint.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 STARTS HERE  */}
      <section
        data-aos="fade-up"
        className="section4 mt-2 mt-md-5 px-3 bg-black"
      >
        <div className="container pt-5 text-center">
          <div className="row pt-3 justify-content-center">
            <div className="s3col1 col-10">
              <h3 className="fw-bold">Recent Works</h3>
              <h2 className="display-5 text-light pb-3 pb-md-5 fw-bold">
                We love what we do, check out some of our latest works
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="s4-img container d-flex justify-content-center">
        <div className="row pb-5 g-1 justify-content-center">
          <div className="testtt col-6 text-end">
            <img
              data-aos="fade-down"
              className="side-1 mb-1 imgg"
              src={doll}
              alt="doll pic"
            />
            <img
              data-aos="fade-down"
              className="side-3 imgg"
              src={dark}
              alt="dark"
            />
          </div>
          <div className="testtt col-6 text-start">
            <img
              data-aos="fade-up"
              className="side-3 mb-1 imgg"
              src={bag}
              alt="bag pic"
            />
            <img
              data-aos="fade-right"
              className="side-2 imgg"
              src={wooden}
              alt="wooden pic"
            />
          </div>
        </div>
      </div>

      {/* SECTION 5 STARTS HERE  */}
      <section data-aos="fade-up" className="section5 px-3 py-5">
        <div className="container pt-5 text-center">
          <div className="row pt-3 justify-content-center">
            <div className="s3col1 col-10">
              <h3 className="fw-bold">Our Clients</h3>
              <h2 className="display-5 text-dark pb-3 pb-md-5 fw-bold">
                Glint has been honored to partner up with these clients
              </h2>
            </div>
          </div>
          <div
            id="slide-indicators"
            className="carousel slide w-100"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#slide-indicators"
                data-bs-slide-to="0"
                className="active"
              ></button>

              <button
                type="button"
                data-bs-target="#slide-indicators"
                data-bs-slide-to="1"
              ></button>

              <button
                type="button"
                data-bs-target="#slide-indicators"
                data-bs-slide-to="2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="container">
                <div className="carousel-item active">
                  <div className="row g-3">
                    <div className="col-3 ">
                      <img
                        src={doll}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={doll}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={doll}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={doll}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={bag}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={bag}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={bag}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={bag}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={wooden}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={wooden}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={wooden}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={wooden}
                        className="d-block w-100 border border-5 border-secondary rounded-circle"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 TESTIMONIALS */}
      <section data-aos="fade-up" className="px-3 py-5 bg-dark">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active px-1 px-md-5">
              <h2 className="text-light text-center px-5 lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, dolorum distinctio magni provident, quasi
                praesentium, deserunt odit
              </h2>
            </div>
            <div className="carousel-item  px-1 px-md-5">
              <h2 className="text-light text-center px-5 lh-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, dolorum distinctio magni provident, quasi
                praesentium, deserunt odit
              </h2>
            </div>
            <div className="carousel-item px-1 px-md-5">
              <h2 className="text-light text-center px-5 lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores, dolorum distinctio magni provident, quasi
                praesentium, deserunt odit
              </h2>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* SECTION 7 FORMS  */}
      <section
        data-aos="fade-up"
        className="section7 px-0 px-md-3 py-2 py-md-5"
      >
        <div className="container pt-5 text-center">
          <div className="row pt-3 justify-content-center">
            <div className="s7col1 col-10">
              <h3 className="fw-bold">What We Do</h3>
              <h2 className="display-5 pb-3 pb-md-5 fw-bold text-light">
                Reach out for a new project or just say hello
              </h2>
            </div>
            <div className="container row-bg-transparent ">
              <div
                data-aos="flip-left"
                className="row py-5 px-2 px-md-5 justify-content-center "
              >
                <div className=" col-12 col-md-8 text-start">
                  <h3 className="pb-4 text-light fw-bold fs-6">
                    Send A Message
                  </h3>
                  <div className="col-12 my-4 d-flex flex-column">
                    <input
                      type="text"
                      id="text3"
                      name="text"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      id="text2"
                      name="text"
                      placeholder="Subject"
                    />
                    <textarea
                      type="textarea"
                      id="textarea"
                      name="textarea"
                      placeholder="Your Message"
                    />
                    <input type="submit" />
                  </div>
                </div>
                <div className="s7col2 col-12 col-md-4 ps-3 mt-3 mt-md-0 ps-md-5 text-start">
                  <h3 className="pb-0 pb-md-4 text-light fw-bold fs-6">
                    Contact Info
                  </h3>

                  <h2>Where to find us</h2>
                  <h4>1600 Amphitheatre Parkway Mountain View, CA 94043 US</h4>

                  <h2>Email us At</h2>
                  <h4>contact@glintsite.com</h4>
                  <h4>info@glintsite.com</h4>

                  <h2>Call us At</h2>
                  <h4>Phone: (+63) 555 1212</h4>
                  <h4>Mobile: (+63) 555 0100</h4>
                  <h4>Fax: (+63) 555 0101</h4>

                  <div className="col-12 mt-4">
                    <FaFacebookSquare color="white" size="1.5em" />
                    <FaLinkedin className="ms-3" color="white" size="1.5em" />
                    <FaTwitter className="ms-3" color="white" size="1.5em" />
                    <FaYoutube className="ms-3" color="white" size="1.5em" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION  */}
      <section data-aos="fade-up" className="px-1 px-md-3 pt-5 bg-light">
        <div className="container">
          <div className="row px-2 px-md-5 align-items-start">
            <div className="footer-col1 col-12 col-md-6 d-flex flex-column justify-content-between">
              <div className="row py-2 mb-2">
                <h2 className="fs-1 fw-bold">Glint.</h2>
              </div>

              <h3 className="text-muted fs-6 lh-lg pe-5">
                Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
                tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
                autem necessitatibus vitae aut.
              </h3>
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
              <div className="row py-2 py-md-4">
                <h2 className="text-dark fs-5 fw-bold">Get Notified</h2>
              </div>
              <h3 className="text-muted fs-6 lh-lg pe-5">
                Quia quo qui sed odit. Quaerat voluptas autem necessitatibus
                vitae aut non alias sed quia. Ut itaque enim optio ut excepturi
                deserunt iusto porro.
              </h3>
              <input
                type="email5"
                id="email5"
                name="email"
                placeholder="Email"
              />
              <input type="submit" id="submit2" name="submit" />
            </div>
          </div>
        </div>
        <div className="container pt-4 pb-3 d-flex justify-content-center align-items-center">
          <h3 className="fs-6">© Copyright Glint 2022</h3>{" "}
          <h3 className="fs-6 text-danger ms-3">Site Template by Colorlib</h3>
        </div>
      </section>
      <div className="container">
        <button className="push-to-top">
          <a href="#">
            <AiOutlineArrowUp color="#5ebadc" size="1.5em" />
          </a>
        </button>
      </div>

      {/* DASHBOARD TEST  */}
      <section className="container-fluid">
        <div className="container-fluid">
          <div className="row shadow py-2 bg-info align-items-center">
            <div className="col-1">
              {" "}
              <img className="w-25" src={fire} alt="logo" />{" "}
            </div>
            <div className="col-1 ps-3">
              {" "}
              <BsChatLeftText />{" "}
            </div>
            <div className="col-8">
              {" "}
              <input
                className="w-75"
                type="chat"
                name="chat"
                id="chat"
                placeholder="Send message to your connections"
              />
            </div>

            <div className="col-2 d-flex">
              <img className="w-25 me-3" src={fire} alt="logo" />
              <h2 className="fs-6">Ali Ahmad</h2>{" "}
            </div>
          </div>

          <div className="row border border-2 border-danger">
            <div className="col-1 py-5 bg-danger">
              <div className="row pb-3 my-5 border-bottom">
                <BsPeace color="white" size="1.5em" />
              </div>
              <div className="row pb-3 my-5 border-bottom">
                <BsPeace color="white" size="1.5em" />
              </div>
              <div className="row pb-3 my-5 border-bottom">
                <BsPeace color="white" size="1.5em" />
              </div>
              <div className="row pb-3 my-5 border-bottom">
                <BsPeace color="white" size="1.5em" />
              </div>
              <div className="row pb-3 my-5 border-bottom">
                <BsPeace color="white" size="1.5em" />
              </div>
            </div>

            <div className="col-3">
              <div className="row ms-5 pt-5 justify-content-between align-items-start text-light">
                <div className="col-12 pe-4 d-flex justify-content-between align-items-center bg-primary">
                  <h3 className="fs-6 py-2">Users</h3>
                  <BsChevronDown size="0.8em" />
                </div>

                <div className="col-7 py-5 bg-primary">profile pic</div>
                <div className="col-5 py-5 bg-primary">trophy</div>

                <div className="col-7 py-5 bg-primary">profile pic</div>
                <div className="col-5 py-5 bg-primary">trophy</div>

                <div className="col-7 py-5 bg-primary">profile pic</div>
                <div className="col-5 py-5 bg-primary">trophy</div>

                <div className="col-7 py-5 bg-primary">profile pic</div>
                <div className="col-5 py-5 bg-primary">trophy</div>
              </div>
            </div>

            <div className="col-6 pt-5">
              <div className="row mb-4 justify-content-center">
                <img className="w-50" src={fire} alt="" />
              </div>

              <div className="row mb-4">
                <div className="col-6 text-end">
                  {" "}
                  <BsPeace color="Orange" size="3em" />{" "}
                </div>
                <div className="col-6 p-0 d-flex">
                  <h4 className="fs-1">450</h4>
                  <h4 className="fs-6 ms-1">Points</h4>
                </div>
              </div>

              <div className="row text-center">
                <h3 className="fs-6">John Does Sponsers</h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-2 me-3 py-2 border border-2 border-success text-center">
                  <BsPeace color="Orange" size="3em" />
                </div>

                <div className="col-2 me-3 py-2 border border-2 border-success text-center">
                  <BsPeace color="Orange" size="3em" />
                </div>

                <div className="col-2 me-3 py-2 border border-2 border-success text-center ">
                  <BsPeace color="Orange" size="3em" />
                </div>

                <div className="col-2 py-2 border border-2 border-success text-center ">
                  <BsPeace color="Orange" size="3em" />
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="row h-100 pt-5 justify-content-between align-items-start text-light">
                <div className="col-12 bg-primary">
                  <h3 className="fs-6 py-2">Companies</h3>
                </div>

                <div className="col-2 py-3 bg-primary">
                  {" "}
                  <FaTwitter color="white" size="1em" />{" "}
                </div>
                <div className="col-10 py-3 bg-primary">company</div>

                <div className="col-2 py-3 bg-primary">
                  {" "}
                  <FaTwitter color="white" size="1em" />{" "}
                </div>
                <div className="col-10 py-3 bg-primary">company</div>

                <div className="col-2 py-3 bg-primary">
                  {" "}
                  <FaTwitter color="white" size="1em" />{" "}
                </div>
                <div className="col-10 py-3 bg-primary">company</div>

                <div className="col-2 py-3 bg-primary">
                  {" "}
                  <FaTwitter color="white" size="1em" />{" "}
                </div>
                <div className="col-10 py-3 bg-primary">company</div>

                <div className="col-2 py-3 bg-primary">
                  {" "}
                  <FaTwitter color="white" size="1em" />{" "}
                </div>
                <div className="col-10 py-3 bg-primary">company</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
