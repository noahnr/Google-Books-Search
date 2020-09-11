import React from "react";
import { useLocation } from "react-router-dom";

function Nav() {

  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">Google Books</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a 
            className={"nav-link" + ((pathname === "/search" || pathname === "/") ? " active":"")}
            href="/search"
          >Search</a>
        </li>
        <li className="nav-item">
          <a 
            className={"nav-link" + ((pathname === "/books") ? " active":"")}
            href="/books"
          >Saved</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
