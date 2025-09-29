import React from 'react';
import NavBar from './NavBar';
import TweetButton from './Common/TweetButton';
import UserProfileMinimal from './UserProfileMinimal';
import avatarImg from '../assets/avatar.jpg';

const SidebarLeft = ({ navigationItems }) => {
    return (
        <aside className="sidebar-left">
            <NavBar navigationItems={navigationItems} />
            <TweetButton onClick={() => alert('Compose new tweet')} />
            <UserProfileMinimal
                avatarUrl={avatarImg}
                name="Mohammad Dwikat"
                handle="MohammadDwikat3"
            />
        </aside>
    );
};

export default SidebarLeft;