import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="mainpopup2">
      <div className="popup-inner2">
        <div className="popupbox2">
          <div className="headingbox2">
            <BsFillBookmarkCheckFill color="#ACD230" size="1.3em" />
            <h2>Log in</h2>
            <div className="btnbox2">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="close-btn2"
              >
                <AiOutlineCloseCircle size="1.5em" />
              </button>
            </div>
          </div>
          <div className="description2">
            <h3>
              Become a Member - You will enjoy exclusive deals, offers, invites
              and rewards.
            </h3>
          </div>
          <div className="forminputs2">
            <form action="Log in">
              <div className="formcontainer2">
                <div className="empas2">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="Email33"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div className="empas2">
                  <label htmlFor="Password">Create a Password</label>
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    required
                  />
                </div>
              </div>
            </form>
            <div className="formcontainer2">
              <div className="empas3">
                <input type="checkbox" />
                <label htmlFor="Remember Mer">Remember Me</label>
                <button
                  onClick={() => {
                    navigate("/Fpass");
                  }}
                  className="forgotpass"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            <div className="divforbutton2">
              <button className="btnblue3">Become a Member</button>
            </div>
          </div>
          <div className="login2">
            <h3>Don't have an account?</h3>
            <button
              onClick={() => {
                navigate("/Popup");
              }}
              className="signupbtn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
