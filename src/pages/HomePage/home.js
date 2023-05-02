import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../logo.png";
import "./home.css"
import { Modal } from "@mui/material";

const Home = () => {
    const [animeList, setAnimeList] = useState([]);//Popular Anime
    const [animeList2, setAnimeList2] = useState([]);//Trending Anime
    const [selectedAnime, setSelectedAnime] = useState(null);

    const recPage = () => {
        window.location.href = '/recommendation';
    };

    const startPage = () => {
        window.location.href = '/';
    };

    useEffect(() => {
        const fetchAnime = async () => {
            const result = await axios(
                "https://kitsu.io/api/edge/anime?sort=popularityRank"
            );
            setAnimeList(result.data.data.slice(0, 10));
        };
        fetchAnime();
    }, []);

    useEffect(() => {
        const fetchAnime2 = async () => {
            const result2 = await axios(
                "https://kitsu.io/api/edge/trending/anime"
            );
            setAnimeList2(result2.data.data.slice(0, 10));
        };
        fetchAnime2();
    }, []);

    return (
        <>
            <div className="homeTop">
                <img src={logo} alt="AnimeMania" className="homeLogo" />
                <div className="homeTopText">
                    <button className="homeTextAnime">Anime</button>
                    <button onClick={recPage} className="homeTextRec">Recommendations</button>
                </div>
                <button onClick={startPage} className="homeLO">Log out</button>
            </div>
            <br />
            <div>
                <h1>Welcome Username</h1>
                <h2>Member Since</h2>
            </div>
            <br />
            <br /><br /><br />
            <h3 className="homeTextOther">Popular</h3>

            <div className="homeAnimeWrapper">
                <div className="homeAnimeContainer">
                    <br />
                    <div className="homeAnimeView">
                        {animeList.map((anime) => (
                            <div onClick={() => setSelectedAnime(anime)} className="homeAnime" key={anime.id}>
                                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                <p>{anime.attributes.canonicalTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                <div className="modal">
                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                    <p>{selectedAnime?.attributes?.synopsis}</p>
                    <br/>
                    <button className="homeModalButton">Add to Watchlist</button>
                </div>
            </Modal>
            <br />
            <h3 className="homeTextOther">Trending</h3>
            <div className="homeAnimeWrapper">
                <div className="homeAnimeContainer">
                    <br />
                    <div className="homeAnimeView">
                        {animeList2.map((anime2) => (
                            <div onClick={() => setSelectedAnime(anime2)} className="homeAnime" key={anime2.id}>
                                <img src={anime2.attributes.posterImage.small} alt={anime2.attributes.canonicalTitle} />
                                <p>{anime2.attributes.canonicalTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                <div className="modal">
                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                    <p>{selectedAnime?.attributes?.synopsis}</p>
                    <br/>
                    <button className="homeModalButton">Add to Watchlist</button>
                </div>
            </Modal>
            <br />
            <h3 className="homeTextOther">Watchlist</h3>
        </>

    );
};

export default Home;
