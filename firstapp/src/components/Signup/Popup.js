import React, { useState } from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Popup() {
  let navigate = useNavigate();

  return (
    <div className="mainpopup">
      <div className="popup-inner">
        <div className="popupbox">
          <div className="headingbox">
            <BsFillBookmarkCheckFill color="#ACD230" size="1.3em" />
            <h2>Sign up</h2>
            <div className="btnbox">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="close-btn"
              >
                <AiOutlineCloseCircle size="1.5em" />
              </button>
            </div>
          </div>
          <div className="description">
            <h3>
              Become a Member - You will enjoy exclusive deals, offers, invites
              and rewards.
            </h3>
          </div>
          <div className="forminputs">
            <form action="Sign Up">
              <div className="formcontainer">
                <div className="empas">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="Email3"
                    placeholder="example@mail.com"
                    required
                  />
                </div>

                <div className="empas">
                  <label htmlFor="Password">Create a Password</label>
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    required
                  />
                </div>
              </div>
              <div className="divfordob">
                <label htmlFor="date">Date of Birth</label>
                <input type="date" placeholder="MM/DD/YYYY" required />
              </div>
              <label htmlFor="newsletter">
                <input type="checkbox" />
                Subscribe to Newsletter
              </label>
              <div className="divforbutton">
                <button className="btnblue2">Become a Member</button>
              </div>
            </form>
          </div>
          <div className="login">
            <h3>Already have an account?</h3>
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className="loginbtn"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
