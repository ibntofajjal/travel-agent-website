import React from "react";
import "./About.css";
import aboutIMG from "../../img/about-uc.png";

const About = () => {
  return (
    <div>
      <h1 style={{ marginTop: "5rem" }}></h1>

      <div className="about-banner">
        <h1 className="text-center">ABOUT US</h1>
      </div>
      <div className="row about-area">
        <div className="col about-text col-12 col-lg-6 mt-5 mb-5">
          <small className="text-primary">Who We Are </small> <br />
          <h1>WHY CHOOSE US</h1>
          <p>
            Whether you know exactly where you want to go, or you are looking
            for some ideas, "TRAVEL AGENT" has over 4,500 tours and activities
            around the world waiting for you to discover. With new destinations
            continually added, "TRAVEL AGENT" will change your life one visit at
            a time, in fact, by simply re-arranging the letters, "TRAVEL AGENT"
            changes "TRAVEL". I loved it!!! Couldn't believe how great it was,
            for such a good price. I will definitely book other experiences with
            you all. <span className="text-danger">Thank you!</span>
          </p>
        </div>
        <div className="col about-img col-12 col-lg-6">
          <img src={aboutIMG} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
