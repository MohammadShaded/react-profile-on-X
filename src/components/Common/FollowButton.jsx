import React from 'react';
import Button from './Button';

const FollowButton = ({ onClick, children = 'Follow' }) => {
  return (
    <Button onClick={onClick} className="btn-follow">
      {children}
    </Button>
  );
};

export default FollowButton;
