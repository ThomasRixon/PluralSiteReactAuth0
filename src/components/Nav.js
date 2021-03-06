import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/public">Public API</Link>
        </li>
        <li>
          <Link to="/private">Private API</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <button onClick={isAuthenticated() ? logout : login}>
            {isAuthenticated() ? "Logout" : "login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
