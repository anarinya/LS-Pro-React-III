import React from 'react';

export default function CardLikes(props) {
  const likes = props.likes;
  return (
    <span className="CardLikes">
      { likes } likes
    </span>
  );
}