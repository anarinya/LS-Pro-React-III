import React from 'react';
import '../styles/Search.css';

export default function Search(props) {
  return (
    <div className="Search">
      <form className="navigation-form" role="search">
        <div className="search-box">
          <input type="text" className="search-box-input" placeholder="Search" />
        </div>
      </form>
    </div>
  );
}