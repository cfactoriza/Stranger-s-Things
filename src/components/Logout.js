import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  let navigate = useNavigate(); 
  const {setToken} = props;
  function clearToken(event) {
    event.preventDefault();
    setToken("");
    localStorage.clear();
    navigate("/");
  }
  return <button onClick={clearToken}>Sign Out</button>;
};

export default Logout;
