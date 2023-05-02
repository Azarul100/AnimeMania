import React from "react";
import logo from "../../logo.png";
import "./Recommend.css"

const Recommend = () => {
    const animePage = () => {
        window.location.href = '/home';
    }; 

    const startPage = () => {
        window.location.href = '/';
    };

    return (
        <>
            <div className="homeTop">
                <img src={logo} alt="AnimeMania" className="recLogo" />
                <div className="recTopText">
                    <button onClick = {animePage} className="recTextAnime">Anime</button>
                    <button className="recTextRec">Recommendations</button>
                </div>
                <button onClick = {startPage} className="homeLO">Log out</button>
            </div>
        </>
    );
};

export default Recommend;
