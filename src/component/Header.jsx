import React from "react"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/create">Tulis</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header
