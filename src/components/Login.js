import React from "react";
import { loginUser } from "../api";

const Login = (props) => {
    const setToken = props.setToken
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    loginUser(username, password, setToken);
    event.target[0].value = ""
    event.target[1].value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input id="username"></input>
      <label>Password:</label>
      <input id="password" type="password" required></input>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
