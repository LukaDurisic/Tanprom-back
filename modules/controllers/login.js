const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const mysql = require("mysql2");
const firebaseApp = require("../../shared/config/firebase");
const { getUsers } = require("../data/userQuery");

const auth = getAuth(firebaseApp);

const login = async (req, res) => {
  try {
    const email = req.body.username;
    const password = req.body.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        res.send(user.accessToken);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });

      
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = login;
