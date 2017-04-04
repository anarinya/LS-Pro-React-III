// components/Body.js
import React, { Component } from 'react';
import Card from './Card';
import '../styles/Body.css';

export default class Body extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="Body">
        <div className="container">
          { posts.map(post => (
            <Card post={ post } key={ post.post_id }/>
          )) }
        </div>
      </div>
    );
  }
}