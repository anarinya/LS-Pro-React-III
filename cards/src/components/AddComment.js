import React from 'react';

export default function AddComment(props) {
  return (
    <form className="AddComment">
      <input type="text" className="new-comment" placeholder="Add a comment..." />
    </form>
  );
}