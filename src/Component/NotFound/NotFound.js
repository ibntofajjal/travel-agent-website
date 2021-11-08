import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ marginTop: "6rem" }}></h1>
      <div className="not-found-page">
        <Link to="/home">
          <button className="back2home">
            {" "}
            <BiArrowBack />
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
