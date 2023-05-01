import React from "react";
import logo from "../../logo.png";
import "./signup.css";

function SignUp() {
    return (
        <>
            <div className="signinTop">
                <img src={logo} alt="AnimeMania" className="signinLogo" />
            </div>
            <div className="title">
                <h1>Sign Up</h1>
            </div>
        </>
    );
}

export default SignUp;