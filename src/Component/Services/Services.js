import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-sec">
      <h1 className="text-center mb-5">Our Recommended Tour Spots</h1>
      <div className="service-section container">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
