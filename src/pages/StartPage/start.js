import React from "react";
import logo from "../../logo.png";
import "./start.css"
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from 'react-router-dom';

function Start() {
    return (
        <>
            <div className="startTop">
                <img src={logo} alt="AnimeMania" className="startLogo" />
            </div>
            <div className="title">
                <h1>Discover New Anime</h1>
            </div>
            <div className="loginBtn">
                <Link to='/login' className="link">
                    <ButtonComponent>Returning User? Login</ButtonComponent>
                </Link>
            </div>
            <div className="signupBtn">
                <Link to='/signup' className="link">
                    <ButtonComponent>New User? Signup</ButtonComponent>
                </Link>
            </div>
        </>
    );
}

export default Start;