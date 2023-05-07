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
                <div className="wlTopText">
                    <Link to="/">
                        <button className="wlTextAnime">Anime</button>
                    </Link>
                    <Link to="/watchlist">
                        <button className="wlTextWL">Manga</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="wlTextRec">Recommendations</button>
                    </Link>
                </div>
            </div>
            <br />
            <div className="wlLine"></div>
            <br />
            <div className="mangaBody">
                <div className="wlcText">
                    <h1 className="discover">
                        Discover New Manga
                    </h1>
                    <h3 className="ultimate">
                        The ultimate destination for manga readers
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Watchlist;


