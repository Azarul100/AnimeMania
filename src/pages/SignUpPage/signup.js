import React from "react";
import logo from "../../logo.png";
import "./signup.css";
import ButtonComponent from "../../components/ButtonComponent";

function SignUp() {
    const LoginPage = () => {
        window.location.href = '/login';
    };
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
          <ButtonComponent onClick={LoginPage}>Already have an account?</ButtonComponent>
        </div>
      </form>
    </>
    );
}
 
export default SignUp;