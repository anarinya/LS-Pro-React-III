import React from 'react';
import moment from 'moment';
import '../styles/DateSince.css';

export default function DateSince(props) {
  return (
    <span className="DateSince">{moment(props.date).fromNow(true)}</span>
  );
}