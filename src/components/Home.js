import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import Welcome from "./Welcome";
const Home = (props) => {
  const { token, setToken } = props;
  return (
    <>
      <NavBar setToken={setToken} token={token} />
      {!token ? <Login setToken={setToken} /> : <Welcome />}
    </>
  );
};

export default Home;
