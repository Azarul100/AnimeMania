import logo from "../../logo.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recommend.css"
import ButtonComponent from "../../components/ButtonComponent";
import { Modal, CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Recommend = () => {

    const [animeName, setAnimeName] = useState("");
    const [animeData, setAnimeData] = useState([]);
    const [animeName2, setAnimeName2] = useState("");
    const [animeData2, setAnimeData2] = useState([]);
    // const [animeName3, setAnimeName3] = useState("");
    // const [animeData3, setAnimeData3] = useState([]);
    const [animeName4, setAnimeName4] = useState("");
    const [animeData4, setAnimeData4] = useState([]);
    const [animeName5, setAnimeName5] = useState("");
    const [animeData5, setAnimeData5] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [loading, setLoading] = useState(false);  // add loading state
    const [user, setUser] = useState(null);


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


    // NAV BAR 
    const [showAnimeForm, setShowAnimeForm] = useState(false);
    const handleAnimeClick = () => {
        setShowAnimeForm(true);
        setShowGenreForm(false);
        setShowRatingForm(false);
        setShowEpisodesForm(false);
        setShowStatusForm(false);
    }

    const [showGenreForm, setShowGenreForm] = useState(false);
    const handleGenreClick = () => {
        setShowAnimeForm(false);
        setShowGenreForm(true);
        setShowRatingForm(false);
        setShowEpisodesForm(false);
        setShowStatusForm(false);
    }

    const [showRatingForm, setShowRatingForm] = useState(false);
    const handleRatingClick = () => {
        setShowAnimeForm(false);
        setShowGenreForm(false);
        setShowRatingForm(true);
        setShowEpisodesForm(false);
        setShowStatusForm(false);
    }

    const [showEpisodesForm, setShowEpisodesForm] = useState(false);
    const handleEpisodesClick = () => {
        setShowAnimeForm(false);
        setShowGenreForm(false);
        setShowRatingForm(false);
        setShowEpisodesForm(true);
        setShowStatusForm(false);
    }

    const [showStatusForm, setShowStatusForm] = useState(false);
    const handleStatusClick = () => {
        setShowAnimeForm(false);
        setShowGenreForm(false);
        setShowRatingForm(false);
        setShowEpisodesForm(false);
        setShowStatusForm(true);
    }

    // Search functionalities
    // Name
    const handleInputChange = (event) => {
        setAnimeName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}`);
            const animeList = response.data.data;
            const randomAnimeList = animeList.sort(() => 0.5 - Math.random()).slice(0, 10);
            setAnimeData(randomAnimeList);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);  // set loading state to false
        }
    };

    // Genre
    const handleInputChange2 = (event) => {
        setAnimeName2(event.target.value);
    };

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response2 = await axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${animeName2}&page[limit]=20`);
            const animeList2 = response2.data.data;
            const randomAnimeList2 = animeList2.sort(() => 0.5 - Math.random()).slice(0, 10);
            setAnimeData2(randomAnimeList2);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);  // set loading state to false
        }
    };

    // Rating
    // const handleInputChange3 = (event) => {
    //     setAnimeName3(event.target.value);
    // };

    // const handleSubmit3 = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response3 = await axios.get(`https://kitsu.io/api/edge/anime?filter[averageRating]=${animeName3}`);
    //         const animeList3 = response3.data.data;
    //         const randomAnimeList3 = animeList3.sort(() => 0.5 - Math.random()).slice(0, 10);
    //         setAnimeData3(randomAnimeList3);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // Episodes
    const handleInputChange4 = (event) => {
        setAnimeName4(event.target.value);
    };

    const handleSubmit4 = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response4 = await axios.get(`https://kitsu.io/api/edge/anime?filter[episodeCount]=${animeName4}`);
            const animeList4 = response4.data.data;
            const randomAnimeList4 = animeList4.sort(() => 0.5 - Math.random()).slice(0, 10);
            setAnimeData4(randomAnimeList4);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);  // set loading state to false
        }
    };

    // Status
    const handleInputChange5 = (event) => {
        setAnimeName5(event.target.value);
    };

    const handleSubmit5 = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response5 = await axios.get(`https://kitsu.io/api/edge/anime?filter[status]=${animeName5}`);
            const animeList5 = response5.data.data;
            const randomAnimeList5 = animeList5.sort(() => 0.5 - Math.random()).slice(0, 10);
            setAnimeData5(randomAnimeList5);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);  // set loading state to false
        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User is signed in:", currentUser.email);
                setUser(currentUser);
            } else {
                console.log("User is signed out");
                setUser(null);
            }
        });
    }, [auth]);

    // useEffect(() => {
    //     // Disable back button if user is logged in
    //     if (user) {
    //       const disableBackButton = (e) => {
    //         e.preventDefault();
    //         return false;
    //       };
    //       window.addEventListener("onbeforeunload", disableBackButton);
    //       return () => window.removeEventListener("onbeforeunload", disableBackButton);
    //     }
    //   }, [user]);

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
            <div className="recTop">
                <img src={logo} alt="AnimeMania" className="recLogo" />
                <div className="recTopText">
                    <Link to="/home">
                        <button className="recTextAnime">Anime</button>
                    </Link>
                    <Link to="/manga">
                        <button className="recTextWL">Manga</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="recTextRec">Recommendations</button>
                    </Link>
                </div>
                <div className="recButtonArea">
                    <Link to="/">
                        <button onClick={handleLogout} className="recLO">Log out</button>
                    </Link>
                </div>
            </div>
            <br />
            <div className="recLine"></div>
            <div className="recBody">
                <div className="wlcText">
                    <h1 className="discover">
                        Based on your preferences, this is what we have curated
                    </h1>
                    <h3 className="ultimate">
                        Enter the name or genre in the textfields to get recommendations
                    </h3>
                </div>
                <br />
                <div className="recs-filter">
                    <div className="filters">
                        <li onClick={handleAnimeClick}>Name</li>
                        <li onClick={handleGenreClick}>Genre</li>
                        {/* <li onClick={handleRatingClick}>Avg Rating</li> */}
                        <li onClick={handleEpisodesClick}>Episodes</li>
                        <li onClick={handleStatusClick}>Status</li>
                    </div>
                </div>
                {showGenreForm ? (
                    <><form className="genre-form" onSubmit={handleSubmit2}>
                        {/* Add form elements for genre filter here */}
                        <div className="search-bar">
                            <input className="input"
                                type="text"
                                placeholder="Enter an anime genre(s)"
                                id="animeGenre"
                                name="animeGenre"
                                value={animeName2}
                                onChange={handleInputChange2} />
                        </div>
                        <ButtonComponent className="getBtn" type="submit">Get</ButtonComponent>
                    </form>
                        <div className="recAnimeWrapper">
                            <div className="recAnimeContainer">
                                <br />
                                <div className="recAnimeView">
                                    {loading ? (
                                        <CircularProgress />
                                    ) : (
                                        animeData2.map((anime2) => (
                                            <div onClick={() => setSelectedAnime(anime2)} className="recAnime" key={anime2.id}>
                                                <img src={anime2.attributes.posterImage.small} alt={anime2.attributes.canonicalTitle} />
                                                <p>{anime2.attributes.canonicalTitle}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                        <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                            <div className="recModal">
                                <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                                <h3>Average rating: {selectedAnime?.attributes?.averageRating} / 100</h3>
                                <h4>Synopsis</h4>
                                <p>{selectedAnime?.attributes?.synopsis}</p>
                                <br />
                            </div>
                        </Modal></>
                )
                    // : showRatingForm ? (
                    //     // Add form elements for rating filter here
                    //     <>
                    //     <form className="rating-search" onSubmit={handleSubmit3}>
                    //         <div className="search-bar">
                    //             <input className="input"
                    //                 type="text"
                    //                 placeholder="Enter the anime rating"
                    //                 id="animeRating"
                    //                 name="animeRating"
                    //                 value={animeName3}
                    //                 onChange={handleInputChange3}
                    //             />
                    //         </div>
                    //         <ButtonComponent className="getBtn" type="submit">Get</ButtonComponent>
                    //     </form>
                    //     <div className="recAnimeWrapper">
                    //         <div className="recAnimeContainer">
                    //             <br />
                    //             <div className="recAnimeView">
                    //                 {animeData3.map((anime3) => (
                    //                     <div onClick={() => setSelectedAnime(anime3)} className="recAnime" key={anime3.id}>
                    //                         <img src={anime3.attributes.posterImage.small} alt={anime3.attributes.canonicalTitle} />
                    //                         <p>{anime3.attributes.canonicalTitle}</p>
                    //                     </div>
                    //                 ))}
                    //             </div>
                    //         </div>
                    //     </div>
                    //     <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                    //         <div className="recModal">
                    //             <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                    //             <p>{selectedAnime?.attributes?.synopsis}</p>
                    //             <br />
                    //         </div>
                    //     </Modal>
                    //     </>
                    //   ) 
                    : showEpisodesForm ? (
                        // Add form elements for episodes filter here
                        <>
                            <form className="eps-search" onSubmit={handleSubmit4}>
                                <div className="search-bar">
                                    <input className="input"
                                        type="text"
                                        placeholder="Enter the number of episodes"
                                        id="animeEps"
                                        name="animeEps"
                                        value={animeName4}
                                        onChange={handleInputChange4} />
                                </div>
                                <ButtonComponent className="getBtn" type="submit">Get</ButtonComponent>
                            </form><div className="recAnimeWrapper">
                                <div className="recAnimeContainer">
                                    <br />
                                    <div className="recAnimeView">
                                        {loading ? (
                                            <CircularProgress />
                                        ) : (
                                            animeData4.map((anime4) => (
                                                <div onClick={() => setSelectedAnime(anime4)} className="recAnime" key={anime4.id}>
                                                    <img src={anime4.attributes.posterImage.small} alt={anime4.attributes.canonicalTitle} />
                                                    <p>{anime4.attributes.canonicalTitle}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div><Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                                <div className="recModal">
                                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                                    <h3>Average rating: {selectedAnime?.attributes?.averageRating} / 100</h3>
                                    <h4>Synopsis</h4>
                                    <p>{selectedAnime?.attributes?.synopsis}</p>
                                    <br />
                                </div>
                            </Modal></>
                    ) : showStatusForm ? (
                        // Add form elements for status filter here
                        <>
                            <form className="stat-search" onSubmit={handleSubmit5}>
                                <div className="search-bar">
                                    <input className="input"
                                        type="text"
                                        placeholder="Enter the anime status: Current | Finished | TBA | Unreleased | Upcoming"
                                        id="animeStat"
                                        name="animeStat"
                                        value={animeName5}
                                        onChange={handleInputChange5} />
                                </div>
                                <ButtonComponent className="getBtn" type="submit">Get</ButtonComponent>
                            </form><div className="recAnimeWrapper">
                                <div className="recAnimeContainer">
                                    <br />
                                    Copy code
                                    <div className="recAnimeView">
                                        {loading ? (
                                            <CircularProgress />
                                        ) : (
                                            animeData5.map((anime5) => (
                                                <div onClick={() => setSelectedAnime(anime5)} className="recAnime" key={anime5.id}>
                                                    <img src={anime5.attributes.posterImage.small} alt={anime5.attributes.canonicalTitle} />
                                                    <p>{anime5.attributes.canonicalTitle}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div><Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                                <div className="recModal">
                                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                                    <h3>Average rating: {selectedAnime?.attributes?.averageRating} / 100</h3>
                                    <h4>Synopsis</h4>
                                    <p>{selectedAnime?.attributes?.synopsis}</p>
                                    <br />
                                </div>
                            </Modal></>
                    ) : (
                        <><form className="recs-search" onSubmit={handleSubmit}>
                            <div className="search-bar">
                                <input className="input"
                                    type="text"
                                    placeholder="Enter an anime name"
                                    id="animeName"
                                    name="animeName"
                                    value={animeName}
                                    onChange={handleInputChange} />
                            </div>
                            <ButtonComponent className="getBtn" type="submit">Get</ButtonComponent>
                        </form>
                            <div className="recAnimeWrapper">
                                <div className="recAnimeContainer">
                                    <br />
                                    <div className="recAnimeView">
                                        {loading ? (
                                            <CircularProgress />
                                        ) : (
                                            animeData.map((anime) => (
                                                <div onClick={() => setSelectedAnime(anime)} className="recAnime" key={anime.id}>
                                                    <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                                    <p>{anime.attributes.canonicalTitle}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                            <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                                <div className="recModal">
                                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                                    <h3>Average rating: {selectedAnime?.attributes?.averageRating} / 100</h3>
                                    <h4>Synopsis</h4>
                                    <p>{selectedAnime?.attributes?.synopsis}</p>
                                    <br />
                                </div>
                            </Modal></>
                    )
                }
            </div>
        </>
    );
};

export default Recommend;


// import React, { useState } from "react";
// import axios from "axios";
// import logo from "../../logo.png";
// import "./Recommend.css"

// const Recommend = () => {
//   const [animeName, setAnimeName] = useState("");
//   const [animeData, setAnimeData] = useState([]);

//   const handleInputChange = (event) => {
//     setAnimeName(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}`);
//       const animeList = response.data.data;
//       const randomAnimeList = animeList.sort(() => 0.5 - Math.random()).slice(0, 5);
//       setAnimeData(randomAnimeList);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const animePage = () => {
//     window.location.href = '/home';
//   }; 

//   const startPage = () => {
//     window.location.href = '/';
//   };

//   const wlPage = () => {
//     window.location.href = '/watchlist';
//   };

//   return (
//     <>
//       <div className="recTop">
//         <img src={logo} alt="AnimeMania" className="recLogo" />
//         <div className="recTopText">
//           <button onClick = {animePage} className="recTextAnime">Anime</button>
//           <button className="recTextRec">Recommendations</button>
//           <button onClick = {wlPage} className="recTextWL">Watchlist</button>
//         </div>
//         <div className="recButtonArea"><button onClick = {startPage} className="recLO">Log out</button></div>
//       </div>
//       <br/>
//       <div className ="recLine"></div>
//       <br/>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="animeName">Enter an anime name:</label>
//         <input
//           type="text"
//           id="animeName"
//           name="animeName"
//           value={animeName}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Get Recommendations</button>
//       </form>
//       <div className="animeList">
        // {animeData.map((anime) => (
        //   <div key={anime.id}>
        //     <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en_jp} />
        //     <h3>{anime.attributes.titles.en_jp}</h3>
        //   </div>
        // ))}
//       </div>
//     </>
//   );
// };

// export default Recommend;


