import React from "react";
import logo from "../../logo.png";
import "./start.css"
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from 'react-router-dom';
import { app } from "../../config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

function Start() {

    const auth = getAuth(app);

    // Login with Google
    const loginWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then((userCredential) => {
            console.log(userCredential);
            window.location.href = "/home";
        });
    };
    
    return (
        <>
            <div className="startTop">
                <img src={logo} alt="AnimeMania" className="startLogo" />
            </div>
            <div className="title">
                <h1>Connect with the anime and manga community and discover new favorites</h1>
            </div>
            <Link to='/login' className="link">
                <ButtonComponent type="submit" className="loginBtn">
                    Log in
                </ButtonComponent>
            </Link>
            <div className="link">
                <ButtonComponent onClick={loginWithGoogle} type="button" className="loginBtn">
                    Login with Google
                </ButtonComponent>
            </div>
            <Link to='/signup' className="link">
                <ButtonComponent  className="signupBtn">New User? Signup</ButtonComponent>
            </Link>
        </>
    );
}

export default Start;