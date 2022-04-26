import React, { useState } from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsBook,
  BsFolder2Open,
  BsTrophy,
  BsChat,
  BsChatSquareText,
  BsBell,
  BsFillBookmarkFill,
  BsCalendarWeek,
} from "react-icons/bs";
import { FiSearch, FiSettings } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineChrome, AiOutlineLineChart } from "react-icons/ai";
import { SiFastlane } from "react-icons/si";
import fire from "../../Assets/images/fire.png";
import woman from "../../Assets/images/woman2.jpg";
import pakistan from "../../Assets/images/pakistan.jpg";
import php from "../../Assets/images/php.png";
import angular from "../../Assets/images/angular.png";
import node from "../../Assets/images/node.png";
import python from "../../Assets/images/python.png";
import Linechart from "../../Components/Charts/Linechart";
import { MyData, MyData2 } from "../../Components/Charts/Data";
import BarChart from "../../Components/Charts/BarChart";

function Dashboard() {
  const [active, setActive] = useState(1);
  const ChartsData = {
    labels: MyData.map((pick) => pick.date),
    datasets: [
      {
        id: 1,
        label: "Time you spent everyday on learning",
        data: MyData.map((pick) => pick.work),
        backgroundColor: ["red"],
        pointRadius: 0,
        borderWidth: 5,
        borderColor: "skyblue",
        tension: 0.1,
      },

      {
        id: 2,
        label: "Team 2",
        data: MyData.map((pick) => pick.work2),
        backgroundColor: ["blue"],
        pointRadius: 0,
        borderWidth: 5,
        borderColor: "red",
        tension: 0.1,
      },
    ],
  };

  const ChartsData2 = {
    labels: MyData2.map((pick) => pick.date),
    datasets: [
      {
        id: 1,
        label: "From 1 Jan to 12 Jan",
        data: MyData2.map((pick) => pick.work1),
        backgroundColor: ["red", "blue", "skyblue"],
      },
    ],
  };

  return (
    <div>
      <div className="section">
        <div className="container-fluid">
          <div className="row">
            {/* dashboard menu  */}
            <div className="sidebar">
              <div className="logo-box row px-1 py-4 justify-content-center align-items-center border-bottom border-end">
                <div className="d-flex justify-content-center">
                  <img src={fire} alt="logo" />
                </div>
                <div className="col-12 logo-content text-center">
                  <h3 className="fw-bold fs-6 m-1">Orizon Academy</h3>
                  <h4>Learning With Fun</h4>
                </div>
              </div>

              {/* MENU ITEMS  */}
              <div className="row pt-4 ps-2 pb-2 border-end d-flex justify-content-around">
                <div className="col-2 ">
                  {active === 1 ? (
                    <BsBook color="Var(--theme-color1)" size="0.8em" />
                  ) : (
                    <BsBook size="0.8em" />
                  )}
                </div>
                <div
                  onClick={() => setActive(1)}
                  className="col-10 dashboard-items d-flex align-items-center"
                >
                  <a
                    href="#Fill"
                    className={
                      active === 1
                        ? "dashboard-items active"
                        : "dashbpard-items"
                    }
                  >
                    My Courses{" "}
                  </a>
                </div>
              </div>

              <div className="row ps-2 py-2 border-end d-flex justify-content-around">
                <div className="col-2 ">
                  {active === 2 ? (
                    <BsFolder2Open color="Var(--theme-color1)" size="0.8em" />
                  ) : (
                    <BsFolder2Open size="0.8em" />
                  )}
                </div>
                <div
                  onClick={() => setActive(2)}
                  className="col-10 dashboard-items d-flex align-items-center"
                >
                  <a
                    href="#Fill"
                    className={
                      active === 2
                        ? "dashboard-items active"
                        : "dashboard-items"
                    }
                  >
                    Bookmarks{" "}
                  </a>
                </div>
              </div>

              <div className="row ps-2 py-2 border-end d-flex justify-content-around">
                <div className="col-2 ">
                  {active === 3 ? (
                    <SiFastlane color="Var(--theme-color1)" size="0.8em" />
                  ) : (
                    <SiFastlane size="0.8em" />
                  )}
                </div>
                <div
                  onClick={() => setActive(3)}
                  className="col-10 dashboard-items d-flex align-items-center"
                >
                  <a
                    href="#Fill"
                    className={
                      active === 3
                        ? "dashboard-items active"
                        : "dashboard-items"
                    }
                  >
                    Trending Courses{" "}
                  </a>
                </div>
              </div>

              <div className="row ps-2 py-2 border-end d-flex">
                <div className="col-2">
                  {active === 4 ? (
                    <AiOutlineChrome color="Var(--theme-color1" size="1em" />
                  ) : (
                    <AiOutlineChrome size="1em" />
                  )}
                </div>
                <div
                  onClick={() => setActive(4)}
                  className="col-10 pe-2 dashboard-items d-flex justify-content-between align-items-center"
                >
                  <a
                    href="#Fill"
                    className={
                      active === 4
                        ? "dashboard-items active"
                        : "dashboard-items"
                    }
                  >
                    Help Articles{" "}
                  </a>
                  <h3 className="number-boxes1 text-center rounded-pill">6</h3>
                </div>
              </div>

              <div
                onClick={() => setActive(5)}
                className="row ps-2 pt-2 pb-4 border-bottom border-end d-flex justify-content-around"
              >
                <div className="col-2 ">
                  {active === 5 ? (
                    <BsTrophy color="Var(--theme-color1" size="0.8em" />
                  ) : (
                    <BsTrophy size="0.8em" />
                  )}
                </div>
                <div className="col-10 dashboard-items d-flex align-items-center">
                  <a
                    href="#Fill"
                    className={
                      active === 5
                        ? "dashboard-items active"
                        : "dashboard-items"
                    }
                  >
                    Completed Courses{" "}
                  </a>
                </div>
              </div>

              {/* MY TUTORS SECTION  */}
              <div className="row ps-2 pt-4 border-end">
                <div className="col-12 py-2 pe-2 d-flex justify-content-between align-items-center">
                  <h2 className="fs-5 fw-bold">My Tutors</h2>
                  <h3 className="number-boxes text-center rounded-pill">13</h3>
                </div>

                {/* PROFILE 1  */}
                <div className="row ps-2 pe-0 pb-3 pt-4">
                  <div className="col-3 thumbnail-pics">
                    <img src={woman} alt="profile pic" />
                  </div>
                  <div className="col-8 px-2 profiles-content ">
                    <h3>Kathryn Merphy</h3>
                    <h4>PHP Developer</h4>
                  </div>
                  <div className="col-1 p-0">
                    <BsChat color="Var(--theme-color1" />
                  </div>
                </div>

                {/* PROFILE 2  */}
                <div className="row ps-2 pe-0 py-3 ">
                  <div className="col-3 thumbnail-pics">
                    <img src={woman} alt="profile pic" />
                  </div>
                  <div className="col-8 px-2 profiles-content ">
                    <h3>Kathryn Merphy</h3>
                    <h4>PHP Developer</h4>
                  </div>
                  <div className="col-1 p-0">
                    <BsChat color="Var(--theme-color1" />
                  </div>
                </div>

                {/* PROFILE 3  */}
                <div className="row ps-2 pb-4 pe-0 py-3">
                  <div className="col-3 thumbnail-pics">
                    <img src={woman} alt="profile pic" />
                  </div>
                  <div className="col-8 px-2 profiles-content ">
                    <h3>Kathryn Merphy</h3>
                    <h4>PHP Developer</h4>
                  </div>
                  <div className="col-1 p-0">
                    <BsChat color="Var(--theme-color1" />
                  </div>
                </div>
              </div>
            </div>

            {/* main body  */}
            <div className="main-body p-0 m-0">
              {/* HEADER  */}
              <div className="row py-4 px-3 m-0 border-bottom ">
                <div className="col-4 dashboard-heading d-flex flex-column justify-content-center">
                  <h3>Courses Dashboard</h3>
                  <h4 className="m-0">Hello Ali, Welcome Back!</h4>
                </div>
                <div className="col-4 d-flex align-items-center ">
                  <div className="search-icon-left">
                    <a className="text-secondary" href="#Fill">
                      {" "}
                      <FiSearch />{" "}
                    </a>
                  </div>
                  <input
                    className="search-bar"
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search Dashboard"
                  />
                  <div className="search-icon-right">
                    <a className="text-secondary" href="#Fill">
                      <GiSettingsKnobs />
                    </a>
                  </div>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <div className="icons-with-bg">
                    <BsChatSquareText className="mx-2" size="0.8em" />
                  </div>
                  <div className="icons-with-bg mx-2">
                    <BsBell className="mx-2" size="0.8em" />
                  </div>
                  <div className="thumbnail-pics">
                    <img className="mx-2" src={woman} alt="profile pic" />
                  </div>
                </div>
              </div>

              {/* SECTION BELOW HEADER  */}
              <div className="row m-0 pt-4 px-3">
                <div className="col-4 ">
                  <div className="row dashboard-heading align-items-center">
                    <div className="col-6">
                      <h3>Your Courses</h3>
                    </div>
                    <div className="col-6">
                      <span>
                        <button className="blue-button">Premium</button>
                      </span>
                    </div>
                  </div>
                  <div className="row dashboard-heading align-items-center ">
                    <div className="col-1 text-center m-0 ms-2 me-1 p-0">
                      <img src={woman} alt="profile pic" />
                    </div>
                    <div className="col-3 p-0 m-0">
                      <h4 className="m-0">26 Courses</h4>
                    </div>
                  </div>
                </div>
                <div className="col-8 d-flex justify-content-end align-items-center">
                  <a className="text-dark" href="#Fill">
                    <BsFillBookmarkFill
                      color="Var(--theme-color1"
                      className="mx-3"
                    />{" "}
                  </a>
                  <a className="text-muted" href="#Fill">
                    <FiSearch color="darkgray" className="mx-3" />
                  </a>
                </div>
              </div>

              {/* CARDS SECTION  */}
              <div className="scrolling-cards my-3 py-3 px-4 mx-0">
                {/* CARD 1  */}
                <div className="cards py-3">
                  <div className="cards-inner d-flex">
                    <div className="col-3 me-2 card-icon-img">
                      <img className="w-50" src={php} alt="php icon" />
                    </div>
                    <div className="col-8 card-content-top d-flex flex-column justify-content-center">
                      <h4 className="fs-6 p-0">Beginners</h4>
                      <h3 className="fs-5 m-0">Fun With PHP</h3>
                    </div>
                  </div>

                  {/* CARD SECOND ROW */}
                  <div className="row mx-1 py-2 border-bottom card-content-bottom">
                    <div className="col-1 d-flex align-items-center justify-content-start">
                      <h4 className="m-0">by</h4>
                    </div>
                    <div className="col-1 px-2">
                      <img src={woman} alt="..." />
                    </div>
                    <div className="col-9 d-flex align-items-center">
                      <h3 className="m-0 ms-1">Darell Steward</h3>
                    </div>
                  </div>

                  {/* CARD THIRD ROW  */}
                  <div className="row mx-0 py-2 card-content-end">
                    <div className="col-2 d-flex align-items-center">
                      <h3 className="fs-6 m-0">68%</h3>
                    </div>
                    <div className="col-6 pt-2">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-end">
                      <h3 className="fs-6 m-0">19/</h3>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center">
                      <h4 className="fs-6 m-0">26</h4>{" "}
                    </div>

                    <div className="col-2 d-flex align-items-center justify-content-end card-content-bottom">
                      <img className="border" src={pakistan} alt="..." />
                    </div>
                  </div>
                </div>

                {/* CARD 2  */}

                <div className="cards py-3">
                  <div className="cards-inner d-flex">
                    <div className="col-3 me-2 card-icon-img">
                      <img className="w-50" src={angular} alt="php icon" />
                    </div>
                    <div className="col-8 card-content-top d-flex flex-column justify-content-center">
                      <h4 className="fs-6 p-0 text-danger">ADVANCED</h4>
                      <h3 className="fs-5 m-0">Fun With PHP</h3>
                    </div>
                  </div>

                  {/* CARD SECOND ROW */}
                  <div className="row mx-1 py-2 border-bottom card-content-bottom">
                    <div className="col-1 d-flex align-items-center justify-content-start">
                      <h4 className="m-0">by</h4>
                    </div>
                    <div className="col-1 px-2">
                      <img src={woman} alt="..." />
                    </div>
                    <div className="col-9 d-flex align-items-center">
                      <h3 className="m-0 ms-1">Darell Steward</h3>
                    </div>
                  </div>

                  {/* CARD THIRD ROW  */}
                  <div className="row mx-0 py-2 card-content-end">
                    <div className="col-2 d-flex align-items-center">
                      <h3 className="fs-6 m-0">68%</h3>
                    </div>
                    <div className="col-6 pt-2">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-end">
                      <h3 className="fs-6 m-0">19/</h3>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center">
                      <h4 className="fs-6 m-0">26</h4>{" "}
                    </div>

                    <div className="col-2 d-flex align-items-center justify-content-end card-content-bottom">
                      <img className="border" src={pakistan} alt="..." />
                    </div>
                  </div>
                </div>

                {/* CARD THREE  */}

                <div className="cards py-3">
                  <div className="cards-inner d-flex">
                    <div className="col-3 me-2 card-icon-img">
                      <img className="w-50" src={python} alt="php icon" />
                    </div>
                    <div className="col-8 card-content-top d-flex flex-column justify-content-center">
                      <h4 className="fs-6 p-0 text-warning">MODERATE</h4>
                      <h3 className="fs-5 m-0">Fun With PHP</h3>
                    </div>
                  </div>

                  {/* CARD SECOND ROW */}
                  <div className="row mx-1 py-2 border-bottom card-content-bottom">
                    <div className="col-1 d-flex align-items-center justify-content-start">
                      <h4 className="m-0">by</h4>
                    </div>
                    <div className="col-1 px-2">
                      <img src={woman} alt="..." />
                    </div>
                    <div className="col-9 d-flex align-items-center">
                      <h3 className="m-0 ms-1">Darell Steward</h3>
                    </div>
                  </div>

                  {/* CARD THIRD ROW  */}
                  <div className="row mx-0 py-2 card-content-end">
                    <div className="col-2 d-flex align-items-center">
                      <h3 className="fs-6 m-0">68%</h3>
                    </div>
                    <div className="col-6 pt-2">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-end">
                      <h3 className="fs-6 m-0">19/</h3>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center">
                      <h4 className="fs-6 m-0">26</h4>{" "}
                    </div>

                    <div className="col-2 d-flex align-items-center justify-content-end card-content-bottom">
                      <img className="border" src={pakistan} alt="..." />
                    </div>
                  </div>
                </div>

                {/* CARD 4  */}
                <div className="cards py-3">
                  <div className="cards-inner d-flex">
                    <div className="col-3 me-2 card-icon-img">
                      <img className="w-50" src={node} alt="php icon" />
                    </div>
                    <div className="col-8 card-content-top d-flex flex-column justify-content-center">
                      <h4 className="fs-6 p-0 text-danger">ADVANCED</h4>
                      <h3 className="fs-5 m-0">Fun With PHP</h3>
                    </div>
                  </div>

                  {/* CARD SECOND ROW */}
                  <div className="row mx-1 py-2 border-bottom card-content-bottom">
                    <div className="col-1 d-flex align-items-center justify-content-start">
                      <h4 className="m-0">by</h4>
                    </div>
                    <div className="col-1 px-2">
                      <img src={woman} alt="..." />
                    </div>
                    <div className="col-9 d-flex align-items-center">
                      <h3 className="m-0 ms-1">Darell Steward</h3>
                    </div>
                  </div>

                  {/* CARD THIRD ROW  */}
                  <div className="row mx-0 py-2 card-content-end">
                    <div className="col-2 d-flex align-items-center">
                      <h3 className="fs-6 m-0">68%</h3>
                    </div>
                    <div className="col-6 pt-2">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-end">
                      <h3 className="fs-6 m-0">19/</h3>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center">
                      <h4 className="fs-6 m-0">26</h4>{" "}
                    </div>

                    <div className="col-2 d-flex align-items-center justify-content-end card-content-bottom">
                      <img className="border" src={pakistan} alt="..." />
                    </div>
                  </div>
                </div>

                {/* CARD 5  */}

                <div className="cards py-3">
                  <div className="cards-inner d-flex">
                    <div className="col-3 me-2 card-icon-img">
                      <img className="w-50" src={php} alt="php icon" />
                    </div>
                    <div className="col-8 card-content-top d-flex flex-column justify-content-center">
                      <h4 className="fs-6 p-0">Beginners</h4>
                      <h3 className="fs-5 m-0">Fun With PHP</h3>
                    </div>
                  </div>

                  {/* CARD SECOND ROW */}
                  <div className="row mx-1 py-2 border-bottom card-content-bottom">
                    <div className="col-1 d-flex align-items-center justify-content-start">
                      <h4 className="m-0">by</h4>
                    </div>
                    <div className="col-1 px-2">
                      <img src={woman} alt="..." />
                    </div>
                    <div className="col-9 d-flex align-items-center">
                      <h3 className="m-0 ms-1">Darell Steward</h3>
                    </div>
                  </div>

                  {/* CARD THIRD ROW  */}
                  <div className="row mx-0 py-2 card-content-end">
                    <div className="col-2 d-flex align-items-center">
                      <h3 className="fs-6 m-0">68%</h3>
                    </div>
                    <div className="col-6 pt-2">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="68"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-end">
                      <h3 className="fs-6 m-0">19/</h3>
                    </div>
                    <div className="col-1 m-0 p-0 d-flex align-items-center">
                      <h4 className="fs-6 m-0">26</h4>{" "}
                    </div>

                    <div className="col-2 d-flex align-items-center justify-content-end card-content-bottom">
                      <img className="border" src={pakistan} alt="..." />
                    </div>
                  </div>
                </div>
              </div>

              {/* GRAPHS SECTION  */}
              <div className="row py-1 ps-3 pe-4 m-0">
                <div className="col-4 dashboard-heading d-flex flex-column justify-content-center">
                  <h3 className="my-1">Daily Learning Activity</h3>
                  <h4 className="m-0">Time you spent everyday on learning</h4>
                </div>
                <div className="col-4 d-flex align-items-center ">
                  <div className="search-icon-left">
                    <a className="text-secondary" href="#Fill">
                      {" "}
                      <BsCalendarWeek />{" "}
                    </a>
                  </div>
                  <input
                    className="search-bar"
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Search Dashboard"
                  />
                  <div className="search-icon-right">
                    <a className="text-secondary" href="#Fill">
                      <FiSettings />
                    </a>
                  </div>
                </div>
                <div className="dashboard-heading col-3 ps-3 d-flex flex-column justify-content-center">
                  <h3 className="my-1">Weekly Status</h3>
                  <h4 className="m-0">From 1-Jan to 9-Jan</h4>
                </div>
                <div className="col-1 py-1 ps-5 d-flex flex-column justify-content-center">
                  <AiOutlineLineChart color="darkgray" />
                </div>
              </div>

              {/* CHARTS  */}
              <div className="row py-3 mx-0">
                {/* LINE CHART  */}
                <div className="col-6">
                  <Linechart ChartData={ChartsData} />
                </div>

                {/* BAR CHART  */}
                <div className="col-6">
                  <BarChart ChartData={ChartsData2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
