// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_ILRvbKB8N_VJpeAPjXI7cmpxAwHNRSk",
//   authDomain: "animemania-3ff92.firebaseapp.com",
//   databaseURL: "https://animemania-3ff92-default-rtdb.firebaseio.com",
//   projectId: "animemania-3ff92",
//   storageBucket: "animemania-3ff92.appspot.com",
//   messagingSenderId: "908194910975",
//   appId: "1:908194910975:web:0375ec669785052fd132ca",
//   measurementId: "G-09WRZ5G0XW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export { app, analytics };
