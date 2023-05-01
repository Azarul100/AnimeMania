import logo from "../../logo.png"
import Login from "../LogInPage/login";
import SignUp from "../SignUpPage/signup";
import "./start.css"

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
                <button class="button" onClick='Login()'>Returning User? Login</button>
            </div>
            <div className="signupBtn">
            <button class="button" onClick='SignUp()'>New User? Signup</button>
            </div>
        </>
    );
}

export default Start;