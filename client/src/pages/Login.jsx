import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmit = (event) => {};
  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={handleChangeUsername}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <button type="submit">LogIn</button>
        <p>This is an error</p>
        <span>
          Don't You have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
