import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function Form() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = (e) => {
    clearInputs();
    e.preventDefault();
    signInWithEmailAndPassword(email, password).catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-root-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
      }
    });
  };
  const handleSignup = (e) => {
    clearErrors();
    createUserWithEmailAndPassword(email, password).catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
      }
    });
  };
  const handleLogout = () => {
    signOut();
  };
  const authListener = () => {
    onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  // useEffect(() => {
  //   authListener();
  // }, []);
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//w3collective.com/react-authentication-firebase/
https: export default Form;
