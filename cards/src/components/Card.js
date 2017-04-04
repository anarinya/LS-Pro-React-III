// components/Card.js
import React, { Component } from 'react';
import Avatar from './Avatar';
import DateSince from './DateSince';
import CardLikes from './CardLikes';
import CardComment from './CardComment';
import CardFooter from './CardFooter';
import '../styles/Card.css';

export default class Card extends Component {
  static propTypes = {
    post: React.PropTypes.object.isRequired
  }

  render() {
    const { post_author, post_date, post_id, post_description, comments, likes } = this.props.post;
    const img = `../../public/photos/${post_id}.jpg`;

    return (
      <div className="Card">
        <div className="card-header">
          <div className="header-left">
            <Avatar user={ post_author } />
            <span className="username">{ post_author.user_name }</span>
          </div>
          <div className="header-right">
            <DateSince date={ post_date } />
          </div>
        </div>
        <div className="card-area">
          <img className="card-image" src={ img } alt={ post_description } />
        </div>
        <div className="card-body">
          <CardLikes likes={ likes } />
          <div className="card-comments">
            { comments.map(comment => (
              <CardComment comment={ comment } key={ comment.comment_id } />
            ))}
          </div>
        </div>
        <CardFooter />
      </div>
    );
  }
}