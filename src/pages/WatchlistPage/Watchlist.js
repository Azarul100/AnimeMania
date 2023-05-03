import React from "react";
import logo from "../../logo.png";
import "./Watchlist.css"

const Watchlist = () => {
    const animePage = () => {
        window.location.href = '/home';
    };

    const startPage = () => {
        window.location.href = '/';
    };

    const recPage = () => {
        window.location.href = '/recommendation';
    };

    return (
        <>
            <div className="wlTop">
                <img src={logo} alt="AnimeMania" className="wlLogo" />
                <div className="recTopText">
                    <button onClick={animePage} className="wlTextAnime">Anime</button>
                    <button onClick={recPage} className="wlTextRec">Recommendations</button>
                    <button className="wlTextWL">Watchlist</button>
                </div>
                <div className="wlButtonArea"><button onClick={startPage} className="wlLO">Log out</button></div>
            </div>
            <br />
            <div className="wlLine"></div>
            <br />
            <div className="wlIntroText"><h2>Below are a list of your watchlist:</h2></div>
        </>
    );
};

export default Watchlist;


