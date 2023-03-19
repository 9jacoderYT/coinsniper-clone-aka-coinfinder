import { validateProfileImage } from "../validations/image-validations";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/authentication/firebase-config";
import { v4 } from "uuid";

import { db } from "../authentication/firebase-config";

import { collection, addDoc } from "firebase/firestore";

export const uploadCoin = async (
  coinImg,
  nameInput,
  symbol,
  network,
  contactAddress,
  description,
  day,
  month,
  year,
  customChart,
  customSwap,
  websiteURL,
  telegramURL,
  twitterURL,
  discordURL,
  contactTelegramURL,
  creatorEmail
) => {
  // Validate empty fields
  if (
    !coinImg ||
    !nameInput ||
    !symbol ||
    !network ||
    !contactAddress ||
    !description ||
    !websiteURL ||
    !telegramURL ||
    !contactTelegramURL
  ) {
    return false;
  }

  // Validate Image
  const result = validateProfileImage(coinImg);
  if (result !== "success") return false;

  // Put the image in the  /creator email/ Project Name / image
  const imageRef = ref(
    storage,
    `${creatorEmail}/${nameInput}/${coinImg.name + v4()}`
  );

  const status = await uploadBytes(imageRef, coinImg)
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      return false;
    });

  // if their  was error  in uploading, return
  if (!status) return false;

  // gets the image URl stored in Firebases storage
  const uploadImgUrl = await getDownloadURL(status.ref).then((url) => {
    return url;
  });

  // upload the project to firebase database

  // Submit Data
  const projectsCollectionRef = collection(db, "projects");
  try {
    await addDoc(projectsCollectionRef, {
      url: uploadImgUrl,
      nameInput,
      symbol,
      network,
      contactAddress,
      description,
      day,
      month,
      year,
      customChart,
      customSwap,
      websiteURL,
      telegramURL,
      twitterURL,
      discordURL,
      contactTelegramURL,
      creatorEmail,
      votes: 0,
    });
  } catch (error) {
    return false;
  }

  return true;
};
