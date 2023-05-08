// New addition
import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Start from './pages/StartPage/start';
import Login from './pages/LogInPage/login';
import SignUp from './pages/SignUpPage/signup';
import Home from './pages/HomePage/home';
import Recommend from './pages/RecommendationPage/Recommendation';
import Manga from './pages/MangaPage/Manga';
import { Routes, Route, Navigate } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Start/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/recommendation" element={ <Recommend/> } />
        <Route path="/manga" element={ <Manga/> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
