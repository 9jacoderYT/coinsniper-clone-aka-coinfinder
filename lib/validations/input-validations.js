// Email Validation
export const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// Name Valiation
export const allLetter = (text) => {
  if (text.trim().length < 7 || text.trim().length > 30) {
    return false;
  } else {
    return true;
  }
};

// Password Validation
export const CheckPassword = (password) => {
  if (/^[A-Za-z]\w{7,14}$/.test(password.trim())) {
    return true;
  } else {
    return false;
  }
};

// Project Name Valiation
export const projectName = (text) => {
  if (text.trim().length < 3 || text.trim().length > 30) {
    return false;
  } else {
    return true;
  }
};


// Project Symbol Validation
export const projectSymbol = (text) => {
  if (text.trim().length < 2 || text.trim().length > 7) {
    return false;
  } else {
    return true;
  }
};