import React, { useState } from "react";
import "./Carousel.css";
import { BsCircleFill, BsChatLeftQuote } from "react-icons/bs";
import { images } from "./images";

const Carousel = ({ Slides }) => {
  const [current, setCurrent] = useState(0);
  const length = Slides.length;

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const PreviousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const JumpSlide = () => {
    setCurrent(current === 2 ? 1 : current + 1);
  };

  const JumpV2 = () => {
    setCurrent(current === 0 ? 2 : current + 1);
  };

  const JumpV3 = () => {
    setCurrent(current === 2 ? 0 : current - 1);
  };

  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null;
  }

  return (
    <div className="main123">
      <div className="slider">
        <div className="slider-inner">
          <div className="buttonsbox">
            <div className="iconsvertical">
              {" "}
              {current == 0 ? (
                <BsCircleFill color="red" size="1.3em" />
              ) : (
                <BsCircleFill
                  id="midprevious"
                  color="#E2E3E5"
                  size="1.3em"
                  onClick={JumpV3}
                />
              )}
              {current == 1 ? (
                <BsCircleFill color="red" size="1.3em" className="mt-1" />
              ) : (
                <BsCircleFill
                  color="#E2E3E5"
                  size="1.3em"
                  onClick={JumpSlide}
                  className="mt-1"
                />
              )}
              {current == 2 ? (
                <BsCircleFill color="red" size="1.3em" className="mt-1" />
              ) : (
                <BsCircleFill
                  color="#E2E3E5"
                  size="1.3em"
                  onClick={JumpV2}
                  className="mt-1"
                />
              )}
            </div>
          </div>
          {images.map((pick, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && <img src={pick.imgg} alt="asdasdas" />}
                <div className="slidecontent">
                  <div className="qicon">
                    <BsChatLeftQuote color="#27B36A" size="3em" />
                  </div>
                  <div className="carocontent">
                    <h2>
                      Nemo enimat ipsam voluptatem quia voluptas situm ets
                      aspernatis netsum loris fugit, sed quia magnitus honoratis
                      quis ratione sequi etum nets.
                    </h2>
                  </div>
                  <div className="carocontent2">
                    <h2>JENNIFER SMITH — Designer</h2>
                    <h2 className="hred">@EpicThemes</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
