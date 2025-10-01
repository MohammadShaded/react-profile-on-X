import React from 'react';
import ProfileHeader from './ProfileHeader';
import './../MainContent.css'
import ProfileTabs from './ProfileTabs';
import Posts from './Posts';
import WhoToFollow from './WhoToFollow';
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