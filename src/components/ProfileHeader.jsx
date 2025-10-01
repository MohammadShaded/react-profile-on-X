import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProfileInfo from "./ProfileInfo";
import coverPhoto from "../assets/react-cover.jpg"; // Replace with your cover photo path
import profilePhoto from "../assets/react-logo.png"; // Replace with your profile photo path

const ProfileHeader = ({ profile }) => {
    return (
        <div className="profile-header-root">
            <div className="profile-header-top">
                <FaArrowLeft className="icon" />
                <div>
                    <div className="title">{profile.name}</div>
                    <div className="sub">{profile.postsCount} posts</div>
                </div>
            </div>
            <div className="profile-header-cover-wrap">
                <img src={coverPhoto} alt="Cover" className="profile-cover" />
                <img src={profilePhoto} alt="Profile" className="profile-avatar" />
            </div>
            <ProfileInfo profile={profile} />
            
        </div>
    );
};

export default ProfileHeader;