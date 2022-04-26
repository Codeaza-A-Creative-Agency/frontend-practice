import React from "react";
import "./carousel.scss";
import { BsFileEarmarkCode } from "react-icons/bs";
import b5 from "../../Assets/images/b5.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel1() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="s6col2">
      <Carousel
        showDots={true}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        autoPlay={false}
        responsive={responsive}
      >
        <div className="s6card">
          <img src={b5} alt="image" />
          <h2>We are proud of our works</h2>
          <h4>
            <BsFileEarmarkCode />
            14-April-2022 . <BsFileEarmarkCode size="1em" /> Coding
          </h4>
        </div>
        <div className="s6card">
          <img src={b5} alt="image" />
          <h2>We are proud of our works</h2>
          <h4>
            <BsFileEarmarkCode />
            14-April-2022 . <BsFileEarmarkCode size="1em" /> Coding
          </h4>
        </div>
        <div className="s6card">
          <img src={b5} alt="image" />
          <h2>We are proud of our works</h2>
          <h4>
            <BsFileEarmarkCode />
            14-April-2022 . <BsFileEarmarkCode size="1em" /> Coding
          </h4>
        </div>
        <div className="s6card">
          <img src={b5} alt="image" />
          <h2>We are proud of our works</h2>
          <h4>
            <BsFileEarmarkCode />
            14-April-2022 . <BsFileEarmarkCode size="1em" /> Coding
          </h4>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
