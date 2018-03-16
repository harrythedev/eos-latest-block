import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = ({ children, onClick }) => (
  <button className="primary" onClick={onClick}>
    {children}
  </button>  
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
