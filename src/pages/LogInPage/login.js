import React, { useState, useEffect } from "react";
import logo from "../../logo.png";
import "./login.css";
import ButtonComponent from "../../components/ButtonComponent";
import { app } from "../../config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        window.location.href = "/home";
      }
    });
    return unsubscribe;
  }, [auth]);

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        setErrorMessage("Incorrect Email or Password");
      });
  };

  // Login with Google
  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((userCredential) => {
      window.location.href = "/home";
      console.log(userCredential);
    });
  };

  return (
    <>
      <div className="loginTop">
        <img src={logo} alt="AnimeMania" className="loginLogo" />
      </div>
      <form className="loginForm" onSubmit={handleLogin}>
        <div className="formGroup">
          <input
            type="email"
            placeholder="Email"
            className="textInput"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="formGroup">
          <input
            type="password"
            placeholder="Password"
            className="textInput"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <ButtonComponent type="submit" className="loginButton">
          Log in
        </ButtonComponent>

        <ButtonComponent onClick={loginWithGoogle} type="button" className="loginButton">
          Login with Google
        </ButtonComponent>
        <div className="signupLink">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
        <br/>
        {errorMessage && (
          <div className="errorMessage">
            {errorMessage}
          </div>
        )}
      </form>
    </>
  );
}

export default Login;
