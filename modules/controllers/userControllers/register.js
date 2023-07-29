const { userRegister, createCart } = require("../../data/userQuery");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseApp = require("../../../shared/config/firebase");

const auth = getAuth(firebaseApp);

const register = async (req, res) => {
  let uid;
  try {
    const user = { username: req.body.username, password: req.body.password };

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.username,
      user.password
    );
    const newUser = userCredential.user;
    uid = newUser.uid;

    await processUid();
    await cartCreating();

    async function processUid() {
      await userRegister(uid, user.username);
    }

    async function cartCreating() {
      await createCart(uid);
    }

    res.status(201).send("Data sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = register;
