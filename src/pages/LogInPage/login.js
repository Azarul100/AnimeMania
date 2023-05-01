import logo from "../../logo.png"
import "./login.css"

function Login() {
    return (
        <>
            <div className="loginTop">
                <img src={logo} alt="AnimeMania" className="loginLogo" />
            </div>
            <div className="username">
                <form method="POST" action="/login">
                    <label>Username:</label>
                    <input type="text" name="username"></input>

                    <label>Password:</label>
                    <input type="password" name="password"></input>

                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;