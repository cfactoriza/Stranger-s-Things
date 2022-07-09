import React from "react";
import { NavLink } from 'react-router-dom';
import Logout from './Logout'

const NavBar = (props) => {
    const {setToken, token} = props

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
              <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/posts" className="nav-link active" aria-current="page" >Posts</NavLink>
            </li>
            {
              token ?             <li class="nav-item">
                <NavLink to="/profile" className="nav-link active" aria-current="page" >Profile</NavLink>
            </li> : null
            }
            { !token ? 
            <li class="nav-item">
              <NavLink to="/register" className="nav-link active" aria-current="page">Register</NavLink>
            </li> : null
            }
            { token ? 
            <li class="nav-item">
            <Logout setToken={setToken}/>
            </li> : null
            }
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
