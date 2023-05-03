import React from "react";
import logo from "../../logo.png";
import "./start.css"
import ButtonComponent from "../../components/ButtonComponent";

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
                <ButtonComponent onClick={LoginPage}>Returning User? Login</ButtonComponent>
            </div>
            <div className="signupBtn">
            <ButtonComponent onClick={SignupPage}>New User? Signup</ButtonComponent>
            </div>
        </>
    );
}

export default Start;