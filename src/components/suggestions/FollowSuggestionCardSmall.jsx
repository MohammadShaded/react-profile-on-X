import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/SidebarRight.css';

const FollowSuggestionCardSmall = ({ suggestion }) => {
  const { avatar, name, handle, isVerified } = suggestion;
  return (
    <div className="follow-suggestion-card-small">
      <div className="follow-suggestion-avatar-small">
        {avatar ? (
          <img
            src={`src/${avatar}`}
            alt={name}
            className="follow-suggestion-img-small"
          />
        ) : (
          <span className="follow-suggestion-initial-small">
            {name[0]}
          </span>
        )}
      </div>
      <div className="follow-suggestion-info-small">
        <span className="follow-suggestion-name-small">
          {name}
          {isVerified && <FaCheckCircle className="verified-icon-small" />}
        </span>
        <span className="follow-suggestion-handle-small">{handle}</span>
      </div>
      <button className="follow-btn-small">Follow</button>
    </div>
  );
};

export default FollowSuggestionCardSmall;
