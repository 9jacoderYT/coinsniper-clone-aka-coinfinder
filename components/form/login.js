import React, { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

// Validations
import {
  isEmail,
  allLetter,
  CheckPassword,
} from "../../lib/validations/input-validations";

export default function Login(props) {
  //Inputs
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // Error States
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Form Validity
  const [formValid, setFormValid] = useState(false);

  // Form Success
  const [success, setSuccess] = useState(false);

  // Next Router
  const router = useRouter();

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
  const handlePasswordError = () => {
    if (!passwordInput) {
      setPasswordError(true);
      return;
    } else if (!CheckPassword(passwordInput)) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(null);
    setFormValid(null);

    if (!emailInput || emailError) {
      setFormValid("Invalid Email Address, Please Re-try");
      setEmailError(true);
      return;
    }

    if (!passwordInput || passwordError) {
      setFormValid("Password is InValid, Please Re-try");
      setPasswordError(true);
      return;
    }

    //  Checks completed
    // Load Spinner
    setIsLoading(true);

    // Handle login
    const result = await signIn("credentials", {
      redirect: false,
      email: emailInput,
      password: passwordInput,
    });

    // If signing returns an error
    if (result.error) {
      setFormValid("Incorrect Password !!!");
      setIsLoading(false);
      return;
    }

    // If user was successfully signed up
    setSuccess("Login Succesful");
    setIsLoading(false);
    window.location.href = "/";
  };

  return (
    <>
      <div style={{ marginTop: "10px" }}>
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
            onBlur={handlePasswordError}
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
          <div className="alert alert-success shadow-lg mt-4">
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
          className={`btn btn-wide btn-info mt-3 ${
            isLoading ? "loading" : ""
          } w-full`}
          onClick={handleSubmit}
        >
          LOGIN TO YOUR ACCOUNT
        </button>
      </div>

      <div className="mt-3 ">
        <b className="underline decoration-solid">Forgot Password ??</b>
        <br />
        Don't have an Account
        <div
          className="badge badge-accent mx-2 cursor-pointer"
          onClick={() => props.setChecked(true)}
        >
          Register
        </div>
      </div>
    </>
  );
}
