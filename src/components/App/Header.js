import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">

        <Link to="/" className="navbar-brand">musicindabody</Link>

        <ul className="nav navbar-nav pull-xs-right">

          <li className="nav-item">
            <Link to="/search" className="nav-link">
              <span className="oi oi-magnifying-glass"></span> Search
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <span className="oi oi-document"></span> About
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;
