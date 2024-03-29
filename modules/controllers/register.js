const { userRegister, createCart } = require("../data/userQuery");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../shared/config/firebase");

const auth = getAuth(firebaseApp);

const register = async (req, res) => {
  let uid;
  try {
    const user = { username: req.body.username, password: req.body.password };

    createUserWithEmailAndPassword(auth, user.username, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        uid = user.uid;

        processUid();
        cartCreating();
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });

    async function processUid() {
      console.log(uid);
      await userRegister(uid, user.username);
    }

    async function cartCreating() {
      console.log(uid);
      await createCart(uid);
    }

    res.status(201).send("Data sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = register;
