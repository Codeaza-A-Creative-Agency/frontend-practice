import React, { useState } from "react";
import "./Accordian.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Accordian(props) {
  const [Accord, setAccord] = useState(null);

  const toggle = (i) => {
    if (Accord === i) {
      return setAccord(null);
    }
    setAccord(i);
  };

  return (
    <div className="wrapper">
      {props.children}
      <div className="accordian">
        {data.map((item, i) => (
          <div
            className={Accord == i ? "item active" : "item"}
            onClick={() => toggle(i)}
          >
            <div className="title" onClick={() => toggle(i)}>
              <div className="arrow">
                {Accord == i ? (
                  <BsChevronUp color="blue" size="0.5em" />
                ) : (
                  <BsChevronDown color="blue" size="0.5em" />
                )}
              </div>
              <h2 className="text-nowrap">{item.question}</h2>
            </div>
            <div className={Accord == i ? "content show" : "content"}>
              <h4>{item.answer}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Create Account",
    answer:
      "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.",
  },

  {
    question: "Choose Packgae",
    answer:
      "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.",
  },

  {
    question: "Enjoy Smart",
    answer:
      "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.",
  },
];

export default Accordian;
