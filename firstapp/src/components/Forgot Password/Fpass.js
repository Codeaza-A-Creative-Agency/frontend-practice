import React from "react";
import "./FPass.css";
import { useNavigate } from "react-router-dom";

import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Fpass(props) {
  let navigate = useNavigate();

  return (
    <div className="mainpopup3">
      <div className="popup-inner3">
        <div className="popupbox3">
          <div className="headingbox3">
            <BsFillBookmarkCheckFill color="#ACD230" size="1.3em" />
            <h2>Forgot Password?</h2>
            <div className="btnbox3">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="close-btn3"
              >
                <AiOutlineCloseCircle
                  onClick={() => props.trigger(false)}
                  size="1.5em"
                />
              </button>
            </div>
          </div>
          <div className="description3">
            <h3>
              Please enter the email address that you used to create your
              account and we will send you a link to reset your password.
            </h3>
          </div>
          <div className="forminputs3">
            <form action="Forgot Password">
              <div className="formcontainer3">
                <div className="empas33">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="Email33"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
              </div>
            </form>
            <div className="divforbutton3">
              <button className="btnblue33">Submit</button>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Fpass;
