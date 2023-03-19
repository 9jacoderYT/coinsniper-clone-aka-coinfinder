import { allLetter, CheckPassword, isEmail } from "./input-validations";

export const signupDataValidation = (name, email, password) => {
  // checking if data fields are empty
  if (!name || !email || !password) return false;

  // checking the name field
  if (!allLetter(name)) return false;

  // Checking the email field
  if (!isEmail(email)) return false;

  // checking the password field
  if (!CheckPassword(password)) return false;

  return true;
};

export const loginDataValidation = (email, password) => {
  // checking if data fields are empty
  if (!email || !password) return false;

  // Checking the email field
  if (!isEmail(email)) return false;

  // checking the password field
  if (!CheckPassword(password)) return false;

  return true;
};
