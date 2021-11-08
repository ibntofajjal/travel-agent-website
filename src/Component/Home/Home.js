import React from "react";
import "./Home.css";
import titleLogo from "../../img/title.png";
import ourStory from "../../img/our-story.png";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <img className="bannerLogo" src={titleLogo} alt="" />
      </div>

      {/* Extra Section */}
      <div className="our-story-section">
        <div className="row our-story">
          <div className="col-lg-6 col-md-6 col-sm-12 story-text">
            <h1 className="mb-4">Our Story</h1>
            <spam className="my-2">INSPIRED & PASSIONATE TRAVELERS</spam>
            <p className="mt-4">
              “Travel is the main thing you purchase that makes you more
              extravagant”. We, at ‘Travel Agent’, swear by this and put stock
              in satisfying travel dreams that make you perpetually rich
              constantly. We have been moving excellent encounters for a
              considerable length of time through our cutting-edge planned
              occasion bundles and other fundamental travel administrations. We
              rouse our clients to carry on with a rich life, brimming with
              extraordinary travel encounters.
            </p>
          </div>
          <div className="col">
            <img className="img-fluid" src={ourStory} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
