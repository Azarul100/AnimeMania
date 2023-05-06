const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'StartPage', 'start.js'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'LogInPage', 'login.js'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'SignUpPage', 'signup.js'));
});

app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'HomePage', 'home.js'));
});

app.get('/recommendation', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'RecommendationPage', 'Recommendation.js'));
});

app.get('/watchlist', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'WatchlistPage', 'Watchlist.js'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
