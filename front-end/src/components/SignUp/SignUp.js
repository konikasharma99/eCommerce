import "./SignUp.css";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onButtonClick = () => {
    console.log("Hi, this user is registeted", userName, email, password);
  };

  return (
    <div className="SignUpMain">
      <h1>Welcome to our eCommerce website</h1>
      <h3>Please register yourself</h3>
      <div className="inputsAndButtons">
        <input
          className="userInput"
          value={email}
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          className="userInput"
          value={userName}
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="user-name"
        />
        <input
          className="userInput"
          type="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button onClick={onButtonClick} className="signupButton">
          Sign-up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
