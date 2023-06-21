const { userRegister } = require("../data/userQuery");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../shared/config/firebase");

const auth = getAuth(firebaseApp);

const register = async (req, res) => {
  let uid;
  try {
    const user = { username: req.body.username };

    createUserWithEmailAndPassword(auth, user.username)
      .then((userCredential) => {
        const user = userCredential.user;
        uid = user.uid;
        processUid();
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });

    async function processUid() {
      console.log(uid);
      await userRegister(user.username, uid);
    }

    res.status(201).send("Data sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = register;
