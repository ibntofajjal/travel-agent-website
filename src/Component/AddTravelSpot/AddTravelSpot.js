import React from "react";
import "./AddTravelSpot.css";
import { useForm } from "react-hook-form";
import travelLogo from "../../img/logo.png";

const AddTravelSpot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addSpot`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <>
      <div className="travel-spot-page">
        <h1 style={{ marginTop: "5rem" }}>ㅤㅤㅤ</h1>
        <div className="form-section">
          <img src={travelLogo} className="img-fluid mb-3" width="250" alt="" />
          <h1 className="mb-4">Add a new Travel Spot</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Spot Name" {...register("name")} /> <br />
            <input
              type="number"
              placeholder="Travel Cost"
              {...register("cost")}
            />
            <br />
            <input placeholder="Spot image URL" {...register("img")} /> <br />
            <textarea
              className="p-3"
              rows="4"
              cols="65"
              placeholder="Write a short description"
              {...register("des", { required: true })}
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Spot"
            />{" "}
          </form>
        </div>
        <h1 style={{ marginTop: "1rem" }}>ㅤㅤㅤ</h1>
      </div>
    </>
  );
};

export default AddTravelSpot;
