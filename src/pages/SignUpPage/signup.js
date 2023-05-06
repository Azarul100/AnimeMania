import React from "react";
import logo from "../../logo.png";
import "./signup.css";
import ButtonComponent from "../../components/ButtonComponent";

function SignUp() {
    return (
        <>
      <div className="signinTop">
        <img src={logo} alt="AnimeMania" className="signinLogo" />
      </div>
      <form className="signinForm">
        <div className="formGroup">
          <input
            type="text"
            placeholder="New Username / Email"
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
        <ButtonComponent type="submit" className="signinButton">
          Sign up
        </ButtonComponent>
        <div className="signinLink">
             Already have an account? <a href="/login">Log in</a>
        </div>
      </form>
    </>
    );
}
 
export default SignUp;