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
                <h1 className="text">Connect with the anime and manga community and discover new favorites</h1>
            </div>
            <Link to='/login' className="link">
                <ButtonComponent type="submit" className="loginBtn">
                    Returning User? Login
                </ButtonComponent>
            </Link>
            <Link to='/signup' className="link">
                <ButtonComponent  className="signupBtn">New User? Signup</ButtonComponent>
            </Link>
        </>
    );
}

export default Start;