import React,{useState} from "react";
import {state} from './Data'
const About = () => {
  const [header] = useState({
    subHeader: "About Me",
    text:
      "What i am.",
  });
  
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/1.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi</h1>
              <div className="about__info-p1">
              I'm Prem Prasad Tharu, I have done my Bachelor gradutation from Visvesvaraya Technological Univertsity 
              in Computer Science & Engineering and also i am a frerlancer of Web ,Mobile and Desktop Application Development.
              </div>
              
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
