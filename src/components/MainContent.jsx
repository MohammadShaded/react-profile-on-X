import React from 'react';
import ProfileHeader from './profile/ProfileHeader';
import './../styles/MainContent.css';
import ProfileTabs from './profile/ProfileTabs';
import Posts from './tweet/Posts';
import WhoToFollow from './suggestions/WhoToFollow';
const MainContent = ({ profile, tabs, posts, whoToFollowMain }) => {
    return (
        <main className="main-content">
            <ProfileHeader profile={profile} />
            <ProfileTabs tabs={tabs} />
            <Posts posts={posts} />
            <WhoToFollow suggestions={whoToFollowMain} />
            <Posts posts={posts} />

        </main>
    );
};

export default MainContent;