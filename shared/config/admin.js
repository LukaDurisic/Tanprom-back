const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function verifyToken(idToken) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log("Token is valid.");
    console.log(decodedToken);
  } catch (error) {
    console.error("Error verifying token:", error);
  }
}

module.exports = verifyToken;
