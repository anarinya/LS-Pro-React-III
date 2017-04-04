import React from 'react';
import md5 from 'md5';
import '../styles/Avatar.css';

export default function Avatar(props) {
  const { user_name, user_email } = props.user;
  const hash = md5(user_email);
  const avatar_image = `https://www.gravatar.com/avatar/${hash}`;

  return (
    <span className="Avatar">
      <img className="mini-avatar" src={ avatar_image } alt={ user_name } />
    </span>
  );
}

Avatar.propTypes = {
  user: React.PropTypes.object.isRequired
};