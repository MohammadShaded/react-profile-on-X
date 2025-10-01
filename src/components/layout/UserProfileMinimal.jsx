import React from 'react';


const UserProfileMinimal = ({ avatarUrl, name, handle }) => {
  return (
    <div className="user-profile-minimal">
        <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar-small" />

    <div className="user-info">
      <p className="user-name" title={name}>{name}</p>
      <p className="user-handle" title={`@${handle}`}>@{handle}</p>
    </div>
    </div>
  );
}
export default UserProfileMinimal;