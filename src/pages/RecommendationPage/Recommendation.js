import logo from "../../logo.png";
import React, { useState } from "react";
import axios from "axios";
import "./Recommend.css"
import ButtonComponent from "../../components/ButtonComponent";
import { Modal } from "@mui/material";
import { Link } from 'react-router-dom';

const Recommend = () => {

    const [animeName, setAnimeName] = useState("");
    const [animeData, setAnimeData] = useState([]);
    const [animeName2, setAnimeName2] = useState("");
    const [animeData2, setAnimeData2] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);


    const handleInputChange = (event) => {
        setAnimeName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}`);
            const animeList = response.data.data;
            const randomAnimeList = animeList.sort(() => 0.5 - Math.random()).slice(0, 10);
            setAnimeData(randomAnimeList);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange2 = (event) => {
        setAnimeName2(event.target.value);
    };

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        try {
            const response2 = await axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${animeName2}&page[limit]=20`);
            const animeList2 = response2.data.data;
            const randomAnimeList2 = animeList2.sort(() => 0.5 - Math.random()).slice(0, 10);
            setAnimeData2(randomAnimeList2);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="recTop">
                <img src={logo} alt="AnimeMania" className="recLogo" />
                <div className="recTopText">
                    <Link to="/home">
                        <button className="recTextAnime">Anime</button>
                    </Link>
                    <Link to="/recommendation">
                        <button className="recTextRec">Recommendations</button>
                    </Link>
                    <Link to="/watchlist">
                        <button className="recTextWL">Watchlist</button>
                    </Link>
                </div>
                <div className="recButtonArea">
                    <Link to="/">
                        <button className="recLO">Log out</button>
                    </Link>
                </div>
            </div>
            <br />
            <div className="recLine"></div>
            <br /><br />
            <h1 className="recInstruction">Enter the name or genre in the textfields to get recommendations</h1>
            <br/>
            <div className="animeFormArea">
                <form onSubmit={handleSubmit}>
                    <label className="formText" htmlFor="animeName">Enter an anime name:</label>
                    <input
                        type="text"
                        id="animeName"
                        name="animeName"
                        value={animeName}
                        onChange={handleInputChange}
                    />
                    <ButtonComponent type="submit">Get</ButtonComponent>
                </form>
            </div>
            <br />
            <div className="recAnimeWrapper">
                <div className="recAnimeContainer">
                    <br />
                    <div className="recAnimeView">
                        {animeData.map((anime) => (
                            <div onClick={() => setSelectedAnime(anime)} className="recAnime" key={anime.id}>
                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                <p>{anime.attributes.canonicalTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                <div className="recModal">
                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                    <p>{selectedAnime?.attributes?.synopsis}</p>
                    <br/>
                    <div className="recBtnArea"><ButtonComponent >Add to Watchlist</ButtonComponent></div>
                </div>
            </Modal>
            <br/><br/>
            <div className="animeFormArea">
                <form onSubmit={handleSubmit2}>
                    <label className="formText" htmlFor="animeGenre">Enter an anime genre:</label>
                    <input
                        type="text"
                        id="animeGenre"
                        name="animeGenre"
                        value={animeName2}
                        onChange={handleInputChange2}
                    />
                    <ButtonComponent type="submit">Get</ButtonComponent>
                </form>
            </div>
            <br />
            <div className="recAnimeWrapper">
                <div className="recAnimeContainer">
                    <br />
                    <div className="recAnimeView">
                        {animeData2.map((anime2) => (
                            <div onClick={() => setSelectedAnime(anime2)} className="recAnime" key={anime2.id}>
                            <img src={anime2.attributes.posterImage.small} alt={anime2.attributes.canonicalTitle} />
                                <p>{anime2.attributes.canonicalTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal open={selectedAnime !== null} onClose={() => setSelectedAnime(null)}>
                <div className="recModal">
                    <h2>{selectedAnime?.attributes?.canonicalTitle}</h2>
                    <p>{selectedAnime?.attributes?.synopsis}</p>
                    <br/>
                    <div className="recBtnArea"><ButtonComponent >Add to Watchlist</ButtonComponent></div>
                </div>
            </Modal>
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


