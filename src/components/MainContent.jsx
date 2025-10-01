import React from 'react';
import ProfileHeader from './ProfileHeader';
import './../MainContent.css'
import { FaArrowLeft, FaBell, FaEllipsisH } from "react-icons/fa";

const MainContent = ({ profile, posts, whoToFollowMain }) => {
    return (
        <main className="main-content">
            <ProfileHeader profile={profile} />
        </main>
    );
};

export default MainContent;