import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, cost, img, des } = props.service;
  return (
    <div>
      <div className="spot-card">
        <img src={img} className="img-fluid" width="500" alt="" />
        <div className="spot-info">
          <p>
            Spot: <b>{name}</b>
          </p>
          <p>
            Cost: <b> ${cost}</b>
          </p>
          <p>
            Description: <b>{des}</b>
          </p>
        </div>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Service;
