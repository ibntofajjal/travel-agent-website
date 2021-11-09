import React from "react";
import "./Carousel.css";
import img1 from "../../../img/bc1.png";
import img2 from "../../../img/bc2.png";
import img3 from "../../../img/bc3.png";

const Carousel = () => {
  return (
    <div>
      {/* bc: #313f63 */}
      {/* <div style={{ marginTop: "9rem" }}></div> */}
      <div className="container">
        <div className="row carousel-sec">
          <div className="col col-lg-8 col-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner sliding-sec">
                <div className="carousel-item active">
                  <img
                    src={img1}
                    className="d-block w-100  img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h3>Jawad Bin Akib Mubin</h3>
                    <p>
                      Our booking was very easy to do online, I needed to make a
                      few changes that I felt was not handled well at all. Once
                      I spoke to the Team Manager, he was absolutely amazing.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={img2}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h3>Mostafizur Rahman Sawon</h3>
                    <p>
                      The process was quick and easy, with our holiday going as
                      smooth as we could have hoped for. Everything was sorted
                      for us, and all we had to worry about was packing our
                      suitcases!
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={img3}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h3>Md Rafiul Alam Rafi</h3>
                    <p>
                      Loved being able yo book everything in the one place, in
                      one transaction. I will most definitely be using Travel
                      Online for my holiday bookings again in the future! Thanks
                      Jadoo Travel
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col col-lg-4 col-12 right-txt">
            <p>Testimonial</p>
            <h1>
              What people say <br /> About Us.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
