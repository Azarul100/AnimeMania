import logo from "../../logo.png"
import "./login.css"

function Login() {
    return (
        <>
            <div className="loginTop">
                <img src={logo} alt="AnimeMania" className="loginLogo" />
            </div>
            <div>This is the login page</div>
        </>
    );
}

export default Login;