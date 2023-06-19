import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
  const {title, text} = props;

  return (
    <div className="card" style={{ width: `${18}rem` }}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
