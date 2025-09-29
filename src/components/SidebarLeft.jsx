import React from 'react';
import NavBar from './NavBar';
import TweetButton from './Common/TweetButton';
import FollowButton from './Common/FollowButton';
const SidebarLeft = ({ navigationItems }) => {
    return (
        <aside className="sidebar-left">
            <NavBar navigationItems={navigationItems} />
            <TweetButton onClick={() => alert('Compose new tweet')} />
        </aside>
    );
};

export default SidebarLeft;