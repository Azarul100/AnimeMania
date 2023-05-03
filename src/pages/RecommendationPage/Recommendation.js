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
                <div className="recButtonArea"><button onClick = {startPage} className="recLO">Log out</button></div>
            </div>
            <br/>
            <div className ="recLine"></div>
            <br/>
            <h2>To find a recommendation based off an anime type /"anime-name" in the url {"(Ex: /recommendation/naruto)"}</h2>{/*Currently not implemented yet*/}
        </>
    );
};

export default Recommend;


