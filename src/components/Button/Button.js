import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import './Button.css';


const Button = ({ children, error, errorText, loading, onClick }) => {
  let buttonContent = children;
  if (loading) buttonContent = <Loading />;
  if (error) buttonContent = errorText;

  return (
    <button className={`primary${error ? ' error': ''}`} onClick={onClick}>
      {buttonContent}
    </button>  
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  errorText: 'Error',
}

export default Button;
