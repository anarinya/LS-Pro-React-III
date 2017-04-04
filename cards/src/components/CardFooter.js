import React from 'react';
import LikeButton from './LikeButton';
import AddComment from './AddComment';
import '../styles/CardFooter.css';

export default function CardFooter(props) {
  return (
    <div className="CardFooter">
      <div className="footer-left">
        <LikeButton />
        <AddComment />
      </div>
      <div className="footer-right">
        <span className="footer-menu"></span>
      </div>
    </div>
  );
}