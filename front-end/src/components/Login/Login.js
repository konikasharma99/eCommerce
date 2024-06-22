import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const Auth = localStorage.getItem("user");
    if (Auth) {
      navigate("/");
    }
  });
  const onLoginClick = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name && result.email) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Wrong credentials entered");
    }
  };
  return (
    <div className="loginMain">
      <h3 className="h2">Enter your login details</h3>
      <input
        className="inputBox"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
        type="text"
      />
      <input
        className="inputBox"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
        type="password"
      />
      <button onClick={onLoginClick} className="loginBtn">
        Login
      </button>
    </div>
  );
};
export default Login;
