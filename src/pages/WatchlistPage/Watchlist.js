import React from "react";
import logo from "../../logo.png";
import "./Watchlist.css"
import { Link } from 'react-router-dom';

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
                    <Link to="/home">
                        <button className="wlTextAnime">Anime</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="wlTextRec">Recommendations</button>
                    </Link>
                    <Link to="/watchlist">
                        <button className="wlTextWL">Watchlist</button>
                    </Link>
                </div>
                <div className="wlButtonArea">
                    <Link to="/">
                        <button className="wlLO">Log out</button>
                    </Link>
                </div>
            </div>
            <br />
            <div className="wlLine"></div>
            <br />
            <div className="wlIntroText"><h2>You are currently watching</h2></div>
        </>
    );
};

export default Watchlist;


