import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./MyBooking.css";
import Booking from "../../img/Booking.png";
import { useParams } from "react-router";

const MyBooking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container booking-page">
        <div className="row booking-row">
          <div className="col col-md-6 col-lg-6 col-12">
            <img src={Booking} className="img-fluid" alt="" />
          </div>
          {/* Form Section */}
          <div className="col col-md-6 col-lg-6 col-12 booking-form">
            <h1 className="text-center">Booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Name"
                value={service?.name}
                {...register("name")}
              />{" "}
              <br />
              <input
                type="email"
                placeholder="Email"
                defaultValue={service?.email}
                {...register("email")}
              />
              <br />
              <input
                type="number"
                placeholder="Cost"
                value={service?.cost}
                {...register("cost")}
              />
              <br />
              <input type="date" placeholder="Date" {...register("date")} />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" value="Book" className=" btn-warning" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
