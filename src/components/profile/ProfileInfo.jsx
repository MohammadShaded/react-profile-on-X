import React from 'react';
import Button from '../Common/Button';
import { FaEllipsisH } from "react-icons/fa";
import BellWithPlus from '../Common/BellWithPlus';
import { FaLink, FaRegCalendarAlt } from "react-icons/fa";
const ProfileInfo = ({ profile }) => {
    // Import icons from react-icons

    return (
        <div className="profile-info">
            <div className="profile-info-buttons">
                <Button className='icon-btn'><FaEllipsisH className="icon" /> </Button>
                <Button className='icon-btn'><BellWithPlus className="icon" /></Button>
                <Button className='Following-btn'>Following</Button>
            </div>
            <div className="profile-info-details">
                <h2 className="profile-name">{profile.name}</h2>
                <h3 className="profile-username">{profile.handle}</h3>
                <p className="profile-bio">{profile.bio}</p>
                <div className="profile-links-row">
                    <span className="profile-website">
                        <FaLink className="profile-link-icon" />
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="profile-website-link">
                            {profile.website}
                        </a>
                    </span>
                    <span className="profile-join-date">
                        <FaRegCalendarAlt className="profile-calendar-icon" />
                        Joined {profile.joinDate}
                    </span>
                </div>


                <div className="profile-follow-row">
                    <span className="profile-following">
                        <strong>{profile.followingCount}</strong> Following
                    </span>
                    <span className="profile-followers">
                        <strong>{profile.followersCount}</strong> Followers
                    </span>
                </div>
                <div className="profile-followed-row">
                    <span className="profile-followed-avatars">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="profile-followed-avatar" />
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="profile-followed-avatar" />
                        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar3" className="profile-followed-avatar" />
                    </span>
                    <span className="profile-followed-text">
                        Followed by {profile.followedBy && profile.followedBy.length > 0 ? profile.followedBy.join(', ') : ''}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;






