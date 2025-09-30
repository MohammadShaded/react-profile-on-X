import React from 'react';
import Button from './Common/Button';
import { FaEllipsisH } from "react-icons/fa";
import BellWithPlus from './Common/BellWithPlus';
const ProfileInfo = ({ name, bio, avatar }) => {
    return (
        <div className="profile-info">
            <div className="profile-info-buttons">
                <Button className='icon-btn'><FaEllipsisH className="icon"/> </Button>
                <Button className='icon-btn'><BellWithPlus className="icon" /></Button>
                <Button className='Following-btn'>Following</Button>
            </div>

        </div>
    );
};

export default ProfileInfo;






