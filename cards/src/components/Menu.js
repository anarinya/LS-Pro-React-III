import React from 'react';
import '../styles/Menu.css';

export default function Menu(props) {
  return (
    <div className="Menu">
      <ul className="menu-list">
        <li><a href="#"><span className="menu-explore"></span></a></li>
        <li><a href="#"><span className="menu-feed"></span></a></li>
        <li><a href="#"><span className="menu-profile"></span></a></li>
      </ul>
    </div>
  );
}