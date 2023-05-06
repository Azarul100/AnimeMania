import React from "react";
import logo from "../../logo.png";
import "./login.css";
import ButtonComponent from "../../components/ButtonComponent";

function Login() {
    const redirectToSignup = () => {
        window.location.href = '/signup';
      };
      
    return (
        <>
      <div className="loginTop">
        <img src={logo} alt="AnimeMania" className="loginLogo" />
      </div>
      <form className="loginForm">
        <div className="formGroup">
          <input
            type="text"
            placeholder="Username / Email"
            className="textInput"
          />
        </div>
        <div className="formGroup">
          <input
            type="password"
            placeholder="Password"
            className="textInput"
          />
        </div>
        <ButtonComponent type="submit" className="loginButton">
          Log in
        </ButtonComponent>
        <div className="signupLink">
             Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
    </>
  );
}

export default Login;  