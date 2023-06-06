// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const getAnalytics = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Bzkeo8sTmfFxHn5x0Q6ptkNTFUlLjew",
  authDomain: "tanprom-eb34e.firebaseapp.com",
  projectId: "tanprom-eb34e",
  storageBucket: "tanprom-eb34e.appspot.com",
  messagingSenderId: "896405506471",
  appId: "1:896405506471:web:a5b4ec87d39780f31bce82",
  measurementId: "G-ERCVHCZ8F8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
module.exports = app;
