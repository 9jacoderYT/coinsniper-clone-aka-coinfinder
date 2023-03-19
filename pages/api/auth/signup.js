import { auth } from "../../../lib/authentication/firebase-config";
import { signupDataValidation } from "../../../lib/validations/serverside-validations";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../lib/authentication/firebase-config";
import { collection, addDoc } from "firebase/firestore";

async function handler(req, res) {
  // Check the type of request and return if its not a POST req
  if (req.method !== "POST") return;

  //Extract the information passed through the req body
  const { displayName, email, password } = req.body;

  // Validate the information gotten
  const informationStatus = signupDataValidation(displayName, email, password);

  // End the function if the inputs are Invalid
  if (!informationStatus) {
    res.status(422).json({ message: "Invalid Inputs" });
    return;
  }

  // Insert User Fields into Database
  const usersCollectionRef = collection(db, "users");
  try {
    // Registers Users into Authentication
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    // Adds users into Firestore database to have extra info on users
    await addDoc(usersCollectionRef, {
      email,
      displayName,
    });

  } catch (error) {
    res.status(422).json({ message: "Account Creation Unsuccessful" });
    return;
  }
  res.status(200).json({ message: "success" });
}

export default handler;
