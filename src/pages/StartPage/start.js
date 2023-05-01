import React from "react";
import logo from "../../logo.png";
import Login from "../LogInPage/login";
import SignUp from "../SignUpPage/signup";
import "./start.css"

function Start() {
    const LoginPage = () => {
        window.location.href = '/login';
    };
    const SignupPage = () => {
        window.location.href = '/signup';
    };
    return (
        <>
            <div className="startTop">
                <img src={logo} alt="AnimeMania" className="startLogo" />
            </div>
            <div className="title">
                <h1>Discover New Anime</h1>
            </div>
            <div className="loginBtn">
                <button class="button" onClick={LoginPage}>Returning User? Login</button>
            </div>
            <div className="signupBtn">
            <button class="button" onClick={SignupPage}>New User? Signup</button>
            </div>
        </>
    );
}

export default Start;