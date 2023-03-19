import { db } from "../authentication/firebase-config";
import { updateDoc, doc } from "firebase/firestore";

export const voteCoin = async (vote, id) => {
  const coinDoc = doc(db, "projects", id);
 
  const newField = {
    vote: vote + 1,
  };
  const result = await updateDoc(coinDoc, newField)
    .then(() => {
      return "success";
    })
    .catch((error) => {
      // If an error occurred, return "Failed"
      return "failed";
    });

  return result;
};
