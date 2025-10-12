import React from 'react';


const Button = ({ children, onClick = () => {}, className = '' }) => {
  const classes = `btn ${className}`.trim();
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
