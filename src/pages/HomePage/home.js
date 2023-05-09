import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../logo.png";
import "./home.css"
import { Modal, CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_ILRvbKB8N_VJpeAPjXI7cmpxAwHNRSk",
    authDomain: "animemania-3ff92.firebaseapp.com",
    // databaseURL: "https://animemania-3ff92-default-rtdb.firebaseio.com",
    projectId: "animemania-3ff92",
    storageBucket: "animemania-3ff92.appspot.com",
    messagingSenderId: "908194910975",
    appId: "1:908194910975:web:0375ec669785052fd132ca",
    measurementId: "G-09WRZ5G0XW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Home = () => {
    const [animeList, setAnimeList] = useState([]);     //  Popular Anime
    const [animeList2, setAnimeList2] = useState([]);   //  Trending Anime
    const [animeList3, setAnimeList3] = useState([]);   //  Random Anime
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);  // add loading state


    useEffect(() => {

        const fetchAnime = async () => {
            setLoading(true);
            try {
                const result = await axios(
                    "https://kitsu.io/api/edge/anime?sort=popularityRank"
                );
                setAnimeList(result.data.data.slice(0, 10));
            } catch (error) {
                setError(error);
                setAnimeList([]);
            }
            finally {
                setLoading(false);  // set loading state to false
            }
        };
        fetchAnime();
    }, []);

    useEffect(() => {
        const fetchAnime2 = async () => {
            setLoading(true);
            try {
                const result2 = await axios(
                    "https://kitsu.io/api/edge/trending/anime"
                );
                setAnimeList2(result2.data.data.slice(0, 10));
            } catch (error) {
                setError(error);
                setAnimeList2([]);
            }
            finally {
                setLoading(false);  // set loading state to false
            }
        };
        fetchAnime2();
    }, []);

    useEffect(() => {
        setLoading(true);
        const offset = Math.floor(Math.random() * 100);
        fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}&sort=-averageRating`)
            .then(response => response.json())
            .then(data => setAnimeList3(data.data.filter(anime => anime.attributes.synopsis && anime.attributes.canonicalTitle !== "deleted")))
            .catch(error => {
                setError(error);
                setAnimeList3([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    // Get current user info
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User is signed in:", currentUser.email);
                setUser(currentUser);
                console.log(currentUser.email)
            } else {
                console.log("User is signed out");
                setUser(null);
            }
        });
    }, [auth]);

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log("User signed out successfully");
                setUser(null); // update the user state
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="homeTop">
                <img src={logo} alt="AnimeMania" className="homeLogo" />
                <div className="homeTopText">
                    <Link to="/home">
                        <button className="homeTextAnime">Anime</button>
                    </Link>
                    <Link to="/manga">
                        <button className="homeTextWL">Manga</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="homeTextRec">Recommendations</button>
                    </Link>
                </div>
                <div className="homeButtonArea">
                    <Link to='/' className="link">
                        <button onClick={handleLogout} className="homeLO">Log out</button>
                    </Link>
                </div>
            </div>
            <br />
            <div>
                <br></br>
            </div>
            <div className="homeLine"></div>
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
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                animeList.map((anime) => (
                                    <div onClick={() => setSelectedAnime(anime)} className="homeAnime" key={anime.id}>
                                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                        <p>{anime.attributes.canonicalTitle}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                    <div className="modal">
                        <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                        <h3>Average rating: {selectedAnime?.attributes?.averageRating} / 100</h3>
                        <h4>Synopsis</h4>
                        <p>{selectedAnime?.attributes?.synopsis}</p>
                        <br />
                    </div>
                </Modal>
                <h3 className="homeTextOther">Trending</h3>
                <div className="homeAnimeWrapper">
                    <div className="homeAnimeContainer">
                        <div className="homeAnimeView">
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                animeList2.map((anime2) => (
                                    <div onClick={() => setSelectedAnime(anime2)} className="homeAnime" key={anime2.id}>
                                        <img src={anime2.attributes.posterImage.small} alt={anime2.attributes.canonicalTitle} />
                                        <p>{anime2.attributes.canonicalTitle}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                    <div className="modal">
                        <h1>Synopsis</h1>
                        <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                        <p>{selectedAnime?.attributes?.synopsis}</p>
                        <br />
                    </div>
                </Modal>
                <h3 className="homeTextOther">Random</h3>
                <div className="homeAnimeWrapper">
                    <div className="homeAnimeContainer">
                        <div className="homeAnimeView">
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                animeList3.map((anime) => (
                                    <div onClick={() => setSelectedAnime(anime)} className="homeAnime" key={anime.id}>
                                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                        <p>{anime.attributes.canonicalTitle}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                    <div className="modal">
                        <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                        <h3>Average rating: {selectedAnime?.attributes?.averageRating} / 100</h3>
                        <h4>Synopsis</h4>
                        <p>{selectedAnime?.attributes?.synopsis}</p>
                        <br />
                    </div>
                </Modal>
            </div>
        </>

    );
};

export default Home;