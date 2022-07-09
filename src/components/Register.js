import React from "react";
import { registerUser } from "../api";
import NavBar  from "./NavBar";

const Register = (props) => {
  const {setToken, token} = props;
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const confirmPassword = event.target[2].value;
    if (password != confirmPassword) {
      return alert("Passwords do not match");
    }
    registerUser(username, password, setToken);
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
  }

  return (
    <>
    <NavBar setToken={setToken} token={token} />
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input></input>
      <label>Password (8 characters minimum):</label>
      <input type="password" minLength="8" required></input>
      <label>Confirm Password</label>
      <input id="passwordconfirmation" type="password"></input>
      <button type="submit">Register</button>
    </form>
    </>
  );
};

export default Register;
