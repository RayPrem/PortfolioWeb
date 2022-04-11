import React, {useState}from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
const Home = () => {
  const [state] = useState({
    title:<Typical
    steps={["Engineer",1000,"Developer",1000,"Designer",1000]}
    loop={Infinity}
    wrapper='b'
  /> ,
    text:
      "I,m Prem, professional web developer with long time experience in this field​",
    image: "./images/Face.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6" >
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a href="https://www.linkedin.com/in/prem-prasad-tharu-54a172186/">
                  <li>
                  <FaLinkedin className="headerIcon" />
                  </li></a>
                  <a href="https://github.com/RayPrem">
                  <li>
                    <FaGithub className="headerIcon" />
                  </li></a>
                  <a href="https://www.facebook.com/Ray.prem.31/">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li></a>
                  <a href="https://www.instagram.com/premdangoriya987/">

                  <li>
                    <FaInstagram className="headerIcon" />
                  </li></a>
                </ul>
                <h1>I'm a <span>{state.title}</span></h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                
                  <NavLink to="" className="btn btn-outline">
                    Hire Me
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;
                  <NavLink to="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
