import React from "react";
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    function handleHome(event){
        event.preventDefault()
        console.log("Take me home")
    }
    function handlePosts(event){
        event.preventDefault()
        console.log("Get my posts")
    }
    function handleProfile(event){
        event.preventDefault()
        console.log("Show my profile")
    }
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          Stranger's Things
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page" onClick={handleHome}>Home</NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/posts" className="nav-link active" aria-current="page" onClick={handlePosts}>Posts</NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/profile" className="nav-link active" aria-current="page" onClick={handleProfile}>Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
