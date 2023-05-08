import React from "react";
import logo from "../../logo.png";
import "./Manga.css"
import { Link } from 'react-router-dom';

const Manga = () => {
    return (
        <>
            <div className="wlTop">
                <img src={logo} alt="AnimeMania" className="wlLogo" />
                <div className="recTopText">
                    <Link to="/home">
                        <button className="wlTextAnime">Anime</button>
                    </Link>
                    <Link to="/manga">
                        <button className="wlTextWL">Manga</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="wlTextRec">Recommendations</button>
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

export default Manga;


