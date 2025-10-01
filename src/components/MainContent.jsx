import React from 'react';
import ProfileHeader from './ProfileHeader';
import './../MainContent.css'
import ProfileTabs from './ProfileTabs';
const MainContent = ({ profile,tabs, posts, whoToFollowMain }) => {
    return (
        <main className="main-content">
            <ProfileHeader profile={profile} />
            <ProfileTabs tabs={tabs} />
        </main>
    );
};

export default MainContent;