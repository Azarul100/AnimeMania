import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css"

const Home = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchAnime = async () => {
            const result = await axios(
                "https://kitsu.io/api/edge/anime?sort=popularityRank"
            );
            setAnimeList(result.data.data.slice(0, 10));
        };
        fetchAnime();
    }, []);

    return (
        <>
            <div className="homeAnimeWrapper">
                <div className="homeAnimeContainer">
                    <h2>Popular Animes</h2>
                    <br />
                    <div className="homeAnimeView">
                        {animeList.map((anime) => (
                            <div className="homeAnime" key={anime.id}>
                                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                <p>{anime.attributes.canonicalTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
