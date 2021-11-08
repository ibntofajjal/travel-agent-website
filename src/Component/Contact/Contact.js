import React from "react";
import "./Contact.css";
import contactIMG from "../../img/contact-us.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contact-us">
      <div className="contactus-banner">
        <h1 className=" banner-txt mt-5">CONTACT US</h1>
      </div>
      <div className="row contact-area">
        <div className="col contact-form col-12 col-lg-6 mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="your name" {...register("name")} /> <br />
            <input type="email" placeholder="your email here" />
            <br />
            <textarea
              placeholder="Your Message..."
              cols="30"
              rows="5"
            ></textarea>{" "}
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
        <div className="col contact-img col-12 col-lg-6">
          <img src={contactIMG} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
