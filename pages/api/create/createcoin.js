import { auth } from "../../../lib/authentication/firebase-config";
import { db } from "../../../lib/authentication/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { validateProfileImage } from "../../../lib/validations/image-validations";
import { projectImageUpload } from "../../../lib/helper-functions/upload-image";
import { ContactlessOutlined } from "@mui/icons-material";

async function handler(req, res) {
  // Check the type of request and return if its not a Post Req
  if (req.method !== "POST") return;

  console.log(fuck);
  console.log(req.body.nameInput);
  //  Extract the information passed through the req body
  const {
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
    creatorEmail,
  } = req.body;

  console.log(coinImg);
  console.log("jeez");

  // Check if the required fields are empty
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
    res.status(422).json({ message: "Required Fields were not Inputed" });
    return;
  }

  // First we will upload the project image and under a folder titled the creator email + project name

  const imageResult = await projectImageUpload(
    coinImg,
    creatorEmail,
    nameInput
  );

  // End the function and return
  if (!imageResult) {
    res.status(422).json({ message: "Account Creation Unsuccessful" });
    return;
  }

  // Submit Data
  //   const projectsCollectionRef = collection(db, "projects");
  //   try {
  //     await addDoc(projectsCollectionRef, {
  //       nameInput,
  //       symbol,
  //       network,
  //       contactAddress,
  //       description,
  //       day,
  //       month,
  //       year,
  //       customChart,
  //       customSwap,
  //       websiteURL,
  //       telegramURL,
  //       twitterURL,
  //       discordURL,
  //       contactTelegramURL,
  //       creatorEmail,
  //     });
  //   } catch (error) {
  //     res.status(422).json({ message: "Project Creation Unsuccessfull" });
  //     return;
  //   }

  res.status(200).json({ message: "success" });
}

export default handler;
