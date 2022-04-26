import React, { useState } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {
  BsCheck2,
  BsFillGiftFill,
  BsFillHeartFill,
  BsFillAwardFill,
  BsFillBasket3Fill,
  BsFillBellFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsFillTelephoneFill,
  BsChatLeftQuote,
  BsWifi,
} from "react-icons/bs";
import {
  IoDiamondOutline,
  IoLocationSharp,
  IoMailOpenOutline,
  IoTimerOutline,
} from "react-icons/io5";

import Bootstrap from "react-bootstrap";
import logo from "../../Assets/images/logoimg.png";
import uiimg from "../../Assets/images/ui-design.png";
import woman from "../../Assets/images/woman.jpg";
import uiimg2 from "../../Assets/images/digital-marketing.png";
import { images } from "../../components/Carousel/images";
import team3 from "../../Assets/images/team003.jpg";
import Accordian from "../../components/Accordian";
import Carousel from "../../components/Carousel/Carousel";

function DashBoard() {
  let navigate = useNavigate();

  return (
    <div className="main">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="block1 ">
          <ul className="nav justify-content-center ">
            <li className="nav-item">
              <a className="linkss active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="linkss" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="linkss" href="#">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="linkss" href="#">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="linkss" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="linkss" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="linkss" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="block2">
          <button
            onClick={() => {
              navigate("/Login");
            }}
            className="login-btn"
          >
            {" "}
            Log in{" "}
          </button>
          <button
            onClick={() => {
              navigate("/Popup");
            }}
            className="btn-primary"
          >
            Sign up
          </button>
        </div>
      </div>

      {/* container below header */}
      <div className="contmain">
        <div className="cont1">
          <div className="contentbox1">
            <h1>
              Discover The Wold's Most Advanced Online Tool{" "}
              <BsChatLeftQuote color="#27B36A" size="1.2em" />{" "}
            </h1>
            <h2>Track and analyze all your data in one central location.</h2>
            <form action="">
              <input
                type="Email"
                id="email"
                name="email"
                placeholder="Enter Your Email here"
              />
              <input type="submit" />
            </form>
          </div>
        </div>
        <div className="cont2">
          <div className="contentbox2">
            <img className="img1" src={uiimg} alt="front image" />
          </div>
        </div>
      </div>

      {/* second main container  */}

      <div className="contmain2">
        <div className="headingdiv">
          <h1>How It Works</h1>
        </div>

        {/* CONTENT BOXES/CARDS  */}
        <div className="contboxes">
          <div className="boxset1">
            <div className="iconsboxset1">
              <IoDiamondOutline
                classname="icons-section2"
                color="red"
                size="2em"
              />
            </div>
            <div className="headingsboxset1">
              <h2>Search Oportunities</h2>{" "}
            </div>
            <div className="textboxset1">
              <p>
                Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum
                vitae etsum ets nisle varius.
              </p>
            </div>
          </div>
          <div className="boxset1">
            <div className="iconsboxset1">
              <BsWifi classname="icons-section2" color="green" size="2em" />
            </div>
            <div className="headingsboxset1">
              <h2>Reach Clients</h2>
            </div>
            <div className="textboxset1">
              <p>
                Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum
                vitae etsum ets nisle varius.
              </p>
            </div>
          </div>
          <div className="boxset1">
            <div className="iconsboxset1">
              <IoTimerOutline
                classname="icons-section2"
                color="#4099FF"
                size="2em"
              />
            </div>
            <div className="headingsboxset1">
              <h2>Get Rewarded</h2>
            </div>
            <div className="textboxset1">
              <p>
                Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum
                vitae etsum ets nisle varius.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD MAIN CONTAINER/SLIDER */}
      <div className="contmain3">
        <div>
          <Carousel Slides={images} />
        </div>
      </div>

      {/* 4th Container */}
      <div className="contmain4">
        <div className="hed2">
          <h2>Trusted By Over 9,000+ Businesses</h2>
        </div>

        <div className="brandscont1">
          <div className="braondboxes">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="brandscont2">
          <div className="braondboxes2">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes2">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes2">
            <img src={logo} alt="logo" />
          </div>
          <div className="braondboxes2">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>

      {/* 5th MAIN CONTAINER */}
      <div className="contmain5">
        <div className="cont1">
          <div className="contentbox5">
            <h1>Discover how we can help you to grow your business fast.</h1>
            <h2>
              Anticas quia voluptas sit aspernatur netsum demo ets ipsam
              voluptatem lorem fugit, seditum netis velas net nesciunt.
            </h2>
            <h3>
              <BsCheck2 color="blue" />
              Quias netus magni netsum qui ratione sequi.
            </h3>
            <h3>
              {" "}
              <BsCheck2 color="blue" />
              Venis ratione sequi netus enim tempor magni.
            </h3>
            <h3>
              {" "}
              <BsCheck2 color="blue" />
              Enim ipsam netus voluptatem voluptas.
            </h3>
            <button className="btnblue1">Discover More</button>
          </div>
        </div>
        <div className="cont52">
          <div className="contentbox52">
            <img className="img1" src={uiimg2} alt="front image" />
          </div>
        </div>
      </div>

      {/* 6th MAIN CONTAINER */}
      <div className="contmain6">
        <div className="contentbox6">
          <h2>Projects Completed</h2>
        </div>
        <div className="cont6">
          <div className="iconbox6">
            <BsFillGiftFill color="#1E90FF" size="3em" />
            <h2>1050+</h2>
            <h3>Happy Clients</h3>
          </div>
          <div className="iconbox6">
            <BsFillHeartFill color="#F8683E" size="3em" />
            <h2>217k</h2>
            <h3>Design Awards</h3>
          </div>
          <div className="iconbox6">
            <BsFillAwardFill color="#27B36A" size="3em" />
            <h2>1210</h2>
            <h3>Happy Clients</h3>
          </div>
          <div className="iconbox6">
            <BsFillBasket3Fill color="#F8683E" size="3em" />
            <h2>217k</h2>
            <h3>Lines Of Code</h3>
          </div>
          <div className="iconbox6">
            <BsFillBellFill color="#FE9C24" size="3em" />
            <h2>2137</h2>
            <h3>Description</h3>
          </div>
        </div>
      </div>

      {/* 7th MAIN CONTAINER */}
      <div className="contmain7">
        <div className="hed7">
          <h2>Meet Our Team</h2>
        </div>
        <div className="cont2nd7">
          <div className="box7">
            <img src={team3} alt="car" />
            <div className="contbox7">
              <h2>Christina Hawkings</h2>
              <h3>Head of SEO</h3>
              <h4>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients for over 5 years.
              </h4>
              <div className="socicons7">
                <BsFacebook color="#1E90FF" size="2em" className="mx-2" />
                <BsTwitter color="4099FF" size="2em" className="mx-2" />
                <BsInstagram color="D92830" size="2em" className="mx-2" />
                <BsLinkedin color="blue" size="2em" className="mx-2" />
              </div>
            </div>
          </div>
          <div className="box7">
            <img src={team3} alt="car" />
            <div className="contbox7">
              <h2>Christina Hawkings</h2>
              <h3>Head of SEO</h3>
              <h4>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients for over 5 years.
              </h4>
              <div className="socicons7">
                <BsFacebook color="#1E90FF" size="2em" className="mx-2" />
                <BsTwitter color="4099FF" size="2em" className="mx-2" />
                <BsInstagram color="D92830" size="2em" className="mx-2" />
                <BsLinkedin color="blue" size="2em" className="mx-2" />
              </div>
            </div>
          </div>
          <div className="box7">
            <img src={team3} alt="" />
            <div className="contbox7">
              <h2>Christina Hawkings</h2>
              <h3>Head of SEO</h3>
              <h4>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients for over 5 years.
              </h4>
              <div className="socicons7">
                <BsFacebook color="#1E90FF" size="2em" className="mx-2" />
                <BsTwitter color="4099FF" size="2em" className="mx-2" />
                <BsInstagram color="D92830" size="2em" className="mx-2" />
                <BsLinkedin color="blue" size="2em" className="mx-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8th MAIN CONTAINER */}
      <div className="contmain8">
        <div className="contbox8">
          <div className="txtstf8">
            <h2>How It Works.</h2>
            <h3>
              Quis autem velis ets reprehender net etid quiste netsum voluptate.
              Utise wisi enim minim veniam, quis etsad ets aspernatis netsum
              stationes nets qualitats.
            </h3>
          </div>
          <div className="cb8mini">
            <div className="cb8m1">
              <h4>Linkedin</h4>
              <div className="stars">
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarHalf color="#FDCC28" size="1.3em" />
              </div>
            </div>
            <div className="cb8m2">
              <h4>Upwork</h4>
              <div className="stars">
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStarFill color="#FDCC28" size="1.3em" />
                <BsStar color="#FDCC28" size="1.3em" />
              </div>
            </div>
          </div>
        </div>
        <div className="contbox82">
          <Accordian />
        </div>
      </div>

      {/* 9th section */}
      <div className="contmain9">
        <div className="headingcont9">
          <h2>Pricing for every business, at any stage</h2>
        </div>
        <div className="cont92">
          <div className="boxesset9">
            <h3>Basic</h3>
            <h1>$25</h1>
            <h3>Per Month</h3>
            <div className="pointsbox">
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" /> Custom Charts
              </h3>
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" />5 Mailboxes,
              </h3>
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" />
                10 Gb Storage
              </h3>
              <h3>
                <BsCheck2 color="blue" size="1.3em" />
                Unlimited Free Dashboards
              </h3>
              <h3>
                <BsCheck2 color="blue" size="1.3em" />
                Access to all APIs
              </h3>
            </div>
            <button className="btn">FREE 15-DAY TRIAL</button>
          </div>

          <div className="boxesset9">
            <h3>Basic</h3>
            <h1>$25</h1>
            <h3>Per Month</h3>
            <div className="pointsbox">
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" /> Custom Charts
              </h3>
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" />5 Mailboxes,
              </h3>
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" />
                10 Gb Storage
              </h3>
              <h3>
                <BsCheck2 color="blue" size="1.3em" />
                Unlimited Free Dashboards
              </h3>
              <h3>
                <BsCheck2 color="blue" size="1.3em" />
                Access to all APIs
              </h3>
            </div>
            <button className="btn2">FREE 15-DAY TRIAL</button>
          </div>

          <div className="boxesset9">
            <h3>Basic</h3>
            <h1>$25</h1>
            <h3>Per Month</h3>
            <div className="pointsbox">
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" /> Custom Charts
              </h3>
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" />5 Mailboxes,
              </h3>
              <h3>
                {" "}
                <BsCheck2 color="blue" size="1.3em" />
                10 Gb Storage
              </h3>
              <h3>
                <BsCheck2 color="blue" size="1.3em" />
                Unlimited Free Dashboards
              </h3>
              <h3>
                <BsCheck2 color="blue" size="1.3em" />
                Access to all APIs
              </h3>
            </div>
            <button className="btn">FREE 15-DAY TRIAL</button>
          </div>
        </div>
      </div>

      {/* SECTION 10 */}
      <div className="contmain10">
        <div className="headingcont10">
          <h2>Amazing Features</h2>
        </div>
        <div className="cont102">
          <div className="contbox102">
            <div className="iconbox">
              <div className="icon10">
                <IoDiamondOutline color="#ACD230" size="2em" />
              </div>
              <div className="tdes10">
                <h2>Support 24/7</h2>
                <h3>
                  Utise wisi enim nets venias, quis tation ullamcorper nets
                  lobotis nisle consequat.
                </h3>
              </div>
            </div>
            <div className="iconbox">
              <div className="icon10">
                <IoDiamondOutline color="#ACD230" size="2em" />
              </div>
              <div className="tdes10">
                <h2>Support 24/7</h2>
                <h3>
                  Utise wisi enim nets venias, quis tation ullamcorper nets
                  lobotis nisle consequat.
                </h3>
              </div>
            </div>
            <div className="iconbox">
              <div className="icon10">
                <IoDiamondOutline color="#ACD230" size="2em" />
              </div>
              <div className="tdes10">
                <h2>Support 24/7</h2>
                <h3>
                  Utise wisi enim nets venias, quis tation ullamcorper nets
                  lobotis nisle consequat.
                </h3>
              </div>
            </div>
          </div>
          <div className="contbox102">
            <div className="iconbox">
              <div className="icon10">
                <IoDiamondOutline color="#ACD230" size="2em" />
              </div>
              <div className="tdes10">
                <h2>Support 24/7</h2>
                <h3>
                  Utise wisi enim nets venias, quis tation ullamcorper nets
                  lobotis nisle consequat.
                </h3>
              </div>
            </div>
            <div className="iconbox">
              <div className="icon10">
                <IoDiamondOutline color="#ACD230" size="2em" />
              </div>
              <div className="tdes10">
                <h2>Support 24/7</h2>
                <h3>
                  Utise wisi enim nets venias, quis tation ullamcorper nets
                  lobotis nisle consequat.
                </h3>
              </div>
            </div>
            <div className="iconbox">
              <div className="icon10">
                <IoDiamondOutline color="#ACD230" size="2em" />
              </div>
              <div className="tdes10">
                <h2>Support 24/7</h2>
                <h3>
                  Utise wisi enim nets venias, quis tation ullamcorper nets
                  lobotis nisle consequat.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION MAIN 11 */}
      <div className="contmain11">
        <div className="contbox111">
          <div className="textbox11">
            <h1>
              “People who succeed in business aren't afraid to hear feedback
              from their customers - they actually thrive from it.”
            </h1>
            <h2>Johanna S. Richardson</h2>
            <h3>CEO Essentials</h3>
          </div>
        </div>
        <div className="contbox112">
          <img src={woman} alt="woman" />
        </div>
      </div>

      {/* section 12 main */}

      <div className="contmain12">
        <div className="hed12">
          <h2>Our Blog</h2>
        </div>
        <div className="cont2nd12">
          <div className="box12">
            <div className="imgbox12"></div>
            <div className="contbox12">
              <h2>Christina Hawkings</h2>
              <h3>Head of SEO</h3>
              <h4>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients for over 5 years.
              </h4>
            </div>
          </div>
          <div className="box12">
            <div className="imgbox12"></div>
            <div className="contbox12">
              <h2>Christina Hawkings</h2>
              <h3>Head of SEO</h3>
              <h4>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients for over 5 years.
              </h4>
            </div>
          </div>
          <div className="box12">
            <div className="imgbox12"></div>
            <div className="contbox12">
              <h2>Christina Hawkings</h2>
              <h3>Head of SEO</h3>
              <h4>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients for over 5 years.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 13 MAIN (the proper way) */}
      <div className="section">
        <div className="column1">
          <div className="col1heading">
            <h2>Get in touch</h2>
          </div>
          <div className="col1form">
            <form action="contact form">
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Full Name"
                required
              />
              <input
                type="Email2"
                id="email2"
                name="email2"
                placeholder="Email Address"
                required
              />
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Phone Number"
                required
              />
              <input
                type="textarea2"
                id="textarea2"
                name="textarea2"
                placeholder="Your Message"
                required
              />
              <button className="btnblue13">Send Message</button>
            </form>
          </div>
        </div>
        <div className="column2">
          <div className="col2heading">
            <h2>How To Find Us</h2>
          </div>
          <div className="col2mapmain">
            <div className="col2map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14928.486695158892!2d72.83134082652167!3d33.554873646600996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df999324e8b081%3A0x4436b8765030008!2slslamabad%20International%20Airport!5e0!3m2!1sen!2s!4v1648822715304!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mapcontent">
              <h2>Head Office</h2>
              <h3>
                {" "}
                <IoLocationSharp color="#4099FF" size="1.3em" />
                10 Oxford Street, London, UK, E1 1EC
              </h3>
              <h3>
                <IoMailOpenOutline color="#4099FF" size="1.3em" />{" "}
                office@smart.co.uk
              </h3>
              <h3>
                {" "}
                <BsFillTelephoneFill color="#4099FF" size="1.1em" /> +44 987 654
                321
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footer">
        <div className="contforfooter">
          <div className="fotcontent">
            <h3>© 2021</h3>
            <h2>Smart.</h2>
            <h3>Designed by</h3>
            <h1>Epic Themes</h1>
          </div>
          <div className="footericoncont">
            <h3>Follow Us.</h3>
            <BsFacebook color="#1E90FF" size="2em" className="mx-2" />
            <BsTwitter color="4099FF" size="2em" className="mx-2" />
            <BsInstagram color="D92830" size="2em" className="mx-2" />
            <BsLinkedin color="blue" size="2em" className="mx-2" />
          </div>
        </div>
      </div>

      {/* testing ground  */}
      <div className="testdiv"></div>
    </div>
  );
}

export default DashBoard;
