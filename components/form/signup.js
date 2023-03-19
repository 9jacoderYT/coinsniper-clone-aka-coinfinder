import React, { useState } from "react";

// Validations
import {
  isEmail,
  allLetter,
  CheckPassword,
} from "../../lib/validations/input-validations";

export default function Signup(props) {
  //Inputs
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // Error States
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Form Validity
  const [formValid, setFormValid] = useState(false);

  //  Success -> handle the successfull submittion of the form
  const [success, setSuccess] = useState();

  // Handle onBlur Name Error
  const handleNameError = () => {
    if (!nameInput || !allLetter(nameInput)) {
      setNameError(true);
      return;
    }

    setNameError(false);
  };

  // Handle onBlur Email Address  Error
  const handleEmailError = () => {
    if (!emailInput) {
      setEmailError(true);
      return;
    } else if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

  //Handle onBlur Confirm Password
  const hanldePasswordError = () => {
    if (!confirmPassword) {
      setPasswordError(true);
      return;
    } else if (confirmPassword !== passwordInput) {
      setPasswordError(true);
      return;
    } else if (!CheckPassword(confirmPassword)) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  const handleFetch = () => {
    // Insert User into the database
    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        displayName: nameInput,
        password: confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "success") {
          // Error Message
          setFormValid(data.message);
          //End Loading Spinner
          setIsLoading(false);
        } else {
          // Success Message
          setFormValid(null);
          setSuccess("Account Created. Please Login");
          //End Loading Spinner
          setIsLoading(false);
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(null);
    setFormValid(null);

    // Check for Validation
    if (!nameInput || nameError) {
      setFormValid("Please fill in your Full name in the name field");
      setNameError(true);
      return;
    }

    if (!emailInput || emailError) {
      setFormValid("Invalid Email Address, Please Re-try");
      setEmailError(true);
      return;
    }

    if (!confirmPassword || passwordError) {
      setFormValid("Invalid Password, Please Re-try");
      setPasswordError(true);
      return;
    }

    // Checks Completed
    // Load Spinner
    setIsLoading(true);

    

    handleFetch();
    //End Loading Spinner
  };

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <div className="mt-5">
          <div className="mt-3 mb-2" align="left">
            Full Name :
          </div>
          <input
            type="email"
            placeholder="Full Name"
            onChange={(event) => setNameInput(event.target.value)}
            onBlur={handleNameError}
            className={`input input-bordered ${
              nameError ? "input-error" : "input-accent"
            } text-darkzero w-full`}
          />
        </div>

        <div className="mt-5">
          <div className="mt-3 mb-2" align="left">
            Email Address :
          </div>
          <input
            type="email"
            placeholder="Email Address"
            onBlur={handleEmailError}
            onChange={(event) => setEmailInput(event.target.value)}
            className={`input input-bordered ${
              emailError ? "input-error" : "input-accent"
            } text-darkzero w-full`}
          />
        </div>
        <div className="mt-5">
          <div className="mt-3 mb-2" align="left">
            Password :
          </div>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPasswordInput(event.target.value)}
            className="input input-bordered input-accent w-full text-darkzero"
          />
        </div>
        <div className="mt-5">
          <div className="mt-3 mb-2" align="left">
            Confirm Password :
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            onBlur={hanldePasswordError}
            className={`input input-bordered ${
              passwordError ? "input-error" : "input-accent"
            } text-darkzero w-full`}
          />
        </div>

        {formValid && (
          <div className="alert alert-warning shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{formValid}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="alert alert-info shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{success}</span>
            </div>
          </div>
        )}

        <button
          className={`btn btn-wide btn-accent mt-3 ${
            isLoading ? "loading" : ""
          } w-full`}
          onClick={handleSubmit}
        >
          REGISTER YOUR ACCOUNT
        </button>
      </div>

      <div className="mt-3">
        Already Signed up ??
        <div
          className="badge badge-info mx-2 cursor-pointer"
          onClick={() => props.setChecked(false)}
        >
          login
        </div>
      </div>
    </>
  );
}
