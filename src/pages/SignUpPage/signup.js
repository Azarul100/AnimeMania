import React, { useState } from "react";
import logo from "../../logo.png";
import "./signup.css";
import ButtonComponent from "../../components/ButtonComponent";
import { app } from "../../config/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth(app);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      window.location.href = "/home";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="signinTop">
        <img src={logo} alt="AnimeMania" className="signinLogo" />
      </div>
      <form className="signinForm" onSubmit={handleSignUp}>
        {error && <div className="error">{error}</div>}
        <div className="formGroup">
          <input
            type="email"
            placeholder="New Email"
            className="textInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <input
            type="password"
            placeholder="Password"
            className="textInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
