import React from 'react';
import Button from './Button';

const TweetButton = ({ onClick, children = 'Post' }) => {
    return (
        <Button onClick={onClick} className="btn-tweet">
            {children}
        </Button>
    );
};

export default TweetButton;