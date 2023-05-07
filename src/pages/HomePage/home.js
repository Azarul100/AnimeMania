import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../logo.png";
import "./home.css"
import { Modal } from "@mui/material";
import { Link } from 'react-router-dom';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);     //Popular Anime
    const [animeList2, setAnimeList2] = useState([]);   //Trending Anime
    const [animeList3, setAnimeList3] = useState([]);   //Random Anime
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const result = await axios(
                    "https://kitsu.io/api/edge/anime?sort=popularityRank"
                );
                setAnimeList(result.data.data.slice(0, 10));
            } catch (error) {
                setError(error);
                setAnimeList([]);
            }
        };
        fetchAnime();
    }, []);

    useEffect(() => {
        const fetchAnime2 = async () => {
            try {
                const result2 = await axios(
                    "https://kitsu.io/api/edge/trending/anime"
                );
                setAnimeList2(result2.data.data.slice(0, 10));
            } catch (error) {
                setError(error);
                setAnimeList2([]);
            }
        };
        fetchAnime2();
    }, []);

    useEffect(() => {
        const offset = Math.floor(Math.random() * 100);
        fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}&sort=-averageRating`)
          .then(response => response.json())
          .then(data => setAnimeList3(data.data.filter(anime => anime.attributes.synopsis && anime.attributes.canonicalTitle !== "deleted")))
          .catch(error => {
              setError(error);
              setAnimeList3([]);
          });
    }, []);

    return (
        <>
            <div className="homeTop">
                <img src={logo} alt="AnimeMania" className="homeLogo"/>
                <div className="homeTopText">
                    <Link to="/">
                        <button className="homeTextAnime">Anime</button>
                    </Link>
                    <Link to="/watchlist">
                        <button className="homeTextWL">Manga</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="homeTextRec">Recommendations</button>
                    </Link>
                </div>
            </div>
            <br />
            <div>
            <br></br>
            {/* <div className ="homeLine"></div>
                <div className="userInfo">
                    <div className="wlcText">
                        <h1 className="welcome">Welcome back, Username</h1>
                        <h2 className="member">Member Since</h2>
                    </div>
                    <div className="memberInfo">
                        <h1 className="welcome1">35</h1>
                        <h2 className="member">anime watched</h2>
                    </div>
                </div> */}
            </div>
            <div className ="homeLine"></div>
            <br></br>
            <div className="homeBody">
                {/*Home Page Title*/}
                <div className="wlcText">
                    <h1 className="discover">
                        Discover New Anime
                    </h1>
                    <h3 className="ultimate">
                        The ultimate destination for anime fans
                    </h3>
                </div>
                {/*Popular Anime*/}
                <h3 className="homeTextOther">Popular</h3>
                <div className="homeAnimeWrapper">
                    <div className="homeAnimeContainer">
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
                        <h1>Synopsis</h1>
                        <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                        <p>{selectedAnime?.attributes?.synopsis}</p>
                        <br/>
                    </div>
                </Modal>
                <h3 className="homeTextOther">Trending</h3>
                <div className="homeAnimeWrapper">
                    <div className="homeAnimeContainer">
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
                        <h1>Synopsis</h1>
                        <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                        <p>{selectedAnime?.attributes?.synopsis}</p>
                        <br/>
                    </div>
                </Modal>
                <h3 className="homeTextOther">Random</h3>
                <div className="homeAnimeWrapper">
                    <div className="homeAnimeContainer">
                        <div className="homeAnimeView">
                            {animeList3.map((anime) => (
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
                        <h1>Synopsis</h1>
                        <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                        <p>{selectedAnime?.attributes?.synopsis}</p>
                        <br/>
                    </div>
                </Modal>
            </div>
        </>

    );
};

export default Home;
