import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarComp() {
  return (
    <ul className="nav justify-content-around app-nav">
      <li className="nav-item">
        <NavLink to="/prev" exact className="app-nav-link" activeClassName="app-nav-active">Yesterday</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" exact className="app-nav-link" activeClassName="app-nav-active">Today</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/next" exact className="app-nav-link" activeClassName="app-nav-active">Next days</NavLink>
      </li>
    </ul>
  );
}
