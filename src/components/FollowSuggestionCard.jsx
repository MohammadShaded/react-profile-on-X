
import { FaUser } from "react-icons/fa";
import FollowButton from "./Common/FollowButton";
const FollowSuggestionCard = ({ suggestion }) => (
  <div className="follow-suggestion-card">
    <div className="follow-suggestion-meta">
      <FaUser style={{ fontSize: "0.95em", marginRight: "6px", verticalAlign: "middle", color: "#71767b" }} />
      <span className="follow-suggestion-related">{suggestion.related}</span>
    </div>
    <div className="follow-suggestion-main">
      <div className="follow-suggestion-avatar">
        {/* Show avatar image if available, otherwise fallback to initial */}
        {suggestion.avatar ? (
          <img
            src={`src/${suggestion.avatar}`}
            alt={suggestion.name}
            className="follow-suggestion-img"
            style={{ width: 40, height: 40, borderRadius: '50%' }}
          />
        ) : (
          <span className="follow-suggestion-initial">
            {suggestion.name[0]}
          </span>
        )}
      </div>
      <div className="follow-suggestion-info">
        <span className="follow-suggestion-name">{suggestion.name}</span>
        <span className="follow-suggestion-handle">{suggestion.handle}</span>
        {suggestion.description && (
          <span className="follow-suggestion-desc">{suggestion.description}</span>
        )}
      </div>
      <FollowButton />
    </div>
  </div>
);

export default FollowSuggestionCard;
