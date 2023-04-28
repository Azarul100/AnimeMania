import logo from "../../logo.png"
import "./start.css"

function Start() {
    return (
        <>
            <div className="startTop">
                <img src={logo} alt="AnimeMania" className="startLogo" />
            </div>
            <div>This is the start page</div>
        </>
    );
}

export default Start;