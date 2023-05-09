import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Protected = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser.email);
        setUser(currentUser.toJSON());
        localStorage.setItem("user", JSON.stringify(currentUser.toJSON()));
      } else {
        console.log("User is signed out");
        setUser(null);
        localStorage.removeItem("user");
      }
    });
    return unsubscribe;
  }, [auth]);

  if (!user) {
    console.log(user)
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;


