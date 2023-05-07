import React from "react";
import logo from "../../logo.png";
import "./login.css";
import ButtonComponent from "../../components/ButtonComponent";
import firebase from "firebase/app";
import "firebase/auth";

function Login() {

    // Login with Google
    const loginWithGoogle = () => {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((userCredential) => {
        console.log(userCredential);
      });
    }

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

        <ButtonComponent onClick={loginWithGoogle} type="submit" className="loginButton">
          Login with Google
        </ButtonComponent>
        <div className="signupLink">
             Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
    </>
  );
}

export default Login;  