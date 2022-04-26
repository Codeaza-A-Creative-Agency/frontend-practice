import React, { useState } from "react";
import "./Testimonials.scss";
import { Data } from "./Data";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsCircleFill, BsChatLeftQuote } from "react-icons/bs";
import testimo3 from "../../Assets/images/testimo3.jpg";

function Testimonials({ Slides }) {
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
          <img src={testimo3} alt="" />
          <div className="buttonsbox">
            <div className="iconsvertical">
              {" "}
              {current == 0 ? (
                <BsCircleFill className="mt-1" color="red" size="0.7em" />
              ) : (
                <BsCircleFill
                  className="mt-1"
                  id="midprevious"
                  color="#E2E3E5"
                  size="0.7em"
                  onClick={JumpV3}
                />
              )}
              {current == 1 ? (
                <BsCircleFill color="red" size="0.7em" className="mt-1" />
              ) : (
                <BsCircleFill
                  color="#E2E3E5"
                  size="0.7em"
                  onClick={JumpSlide}
                  className="mt-1"
                />
              )}
              {current == 2 ? (
                <BsCircleFill color="red" size="0.7em" className="mt-1" />
              ) : (
                <BsCircleFill
                  color="#E2E3E5"
                  size="0.7em"
                  onClick={JumpV2}
                  className="mt-1"
                />
              )}
            </div>
          </div>
          {Data.map((pick, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                <div className="slidecontent">
                  <div className="qicon">
                    <RiDoubleQuotesL color="#E2E3E5" size="2em" />
                  </div>
                  <div className="carocontent">
                    <h2>{pick.quote}</h2>
                  </div>
                  <div className="carocontent2">
                    <h2>{pick.name}</h2>
                    <h2 className="hred">{pick.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
