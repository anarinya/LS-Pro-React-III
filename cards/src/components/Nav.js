import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import '../styles/Nav.css';

export default function Nav(props) {
  return (
    <div className="Nav">
      <div className="row">
        <nav className="navigation-bar">
          <div className="container">
            <div className="nav-col nav-left"><Logo /></div>
            <div className="nav-col nav-middle"><Search /></div>
            <div className="nav-col nav-right"><Menu /></div>
          </div>
        </nav>
      </div>
    </div>
  );
}