import React from "react";
import { NavLink } from 'react-router-dom';
import Logout from './Logout'

const NavBar = (props) => {
    const {setToken, token} = props

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          Stranger's Things
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/posts" className="nav-link active" aria-current="page" >Posts</NavLink>
            </li>
            {
              token ?             <li className="nav-item">
                <NavLink to="/profile" className="nav-link active" aria-current="page" >Profile</NavLink>
            </li> : null
            }
            { !token ? 
            <li className="nav-item">
              <NavLink to="/register" className="nav-link active" aria-current="page">Register</NavLink>
            </li> : null
            }
            { token ? 
            <li className="nav-item">
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
