import React from "react";
import logo from "../../logo.png";
import "./login.css";

function Login() {
    return (
        <>
            <div className="loginTop">
                <img src={logo} alt="AnimeMania" className="loginLogo" />
            </div>
            <div className="title">
                <h1>Login</h1>
            </div>
        </>
    );
}

export default Login;