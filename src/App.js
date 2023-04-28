import './App.css';
import Start from './pages/StartPage/start';
import Login from './pages/LogInPage/login';
import SignUp from './pages/SignUpPage/signup';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Start/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
      </Routes>
    </>
  );
}

export default App;
