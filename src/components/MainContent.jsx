import React from 'react';
import ProfileHeader from './ProfileHeader';
import './../MainContent.css'
import ProfileTabs from './ProfileTabs';
import Posts from './Posts';
const MainContent = ({ profile,tabs, posts, whoToFollowMain }) => {
    return (
        <main className="main-content">
            <ProfileHeader profile={profile} />
            <ProfileTabs tabs={tabs} />
            <Posts posts={posts} />
        </main>
    );
};

export default MainContent;