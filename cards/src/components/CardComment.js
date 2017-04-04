import React from 'react';
import '../styles/CardComment.css';

export default function CardComment(props) {
  const { comment_id, comment_author, content } = props.comment;
  return (
    <div className="CardComment">
      <span className="comment-author">{ comment_author.user_name }</span>
      <span className="comment-description">
        { content }
      </span>
    </div>
  );
}