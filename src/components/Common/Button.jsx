import React from 'react';


const Button = ({ children, onClick={}, className = '', style = {} }) => {
  const classes = `btn ${className}`.trim();
  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
};

export default Button;
