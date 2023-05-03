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

    const wlPage = () => {
        window.location.href = '/watchlist';
    };

    return (
        <>
            <div className="recTop">
                <img src={logo} alt="AnimeMania" className="recLogo" />
                <div className="recTopText">
                    <button onClick = {animePage} className="recTextAnime">Anime</button>
                    <button className="recTextRec">Recommendations</button>
                    <button onClick = {wlPage} className="recTextWL">Watchlist</button>
                </div>
                <div className="recButtonArea"><button onClick = {startPage} className="recLO">Log out</button></div>
            </div>
            <br/>
            <div className ="recLine"></div>
            <br/>
        </>
    );
};

export default Recommend;


