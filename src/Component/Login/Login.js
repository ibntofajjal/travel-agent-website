import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import loginIMG from "../../img/login-page.png";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <h1 style={{ marginTop: "6rem" }}></h1>
      <div className="login-page">
        <button onClick={signInUsingGoogle} className="login-text">
          <FcGoogle /> Login With Google
        </button>
        <div className="login-img">
          <img src={loginIMG} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
