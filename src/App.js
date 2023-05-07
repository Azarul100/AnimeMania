// New addition
import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/HomePage/home';
import Recommend from './pages/RecommendationPage/Recommendation';
import Watchlist from './pages/WatchlistPage/Watchlist';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/recommendation" element={ <Recommend/> } />
        <Route path="/watchlist" element={ <Watchlist/> } />
      </Routes>
    </>
  );
}

export default App;
