import { db } from "../authentication/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../authentication/firebase-config";
import { query, orderBy, limit } from "firebase/firestore";

export const fetchAllCoins = async () => {
  //Fetch all coins on the database from the latest to the oldest

  const coinCollectionRef = collection(db, "projects");
  const data = await getDocs(coinCollectionRef);
  const results = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  // Check if failed
  if (!results) {
    return false;
  }

  return results;
};

export const getCoinById = async (id) => {
  const coins = await fetchAllCoins();

  //  find the coin by ID
  const results = coins.filter((coin) => {
    return coin.id === id;
  });

  return results;
};
