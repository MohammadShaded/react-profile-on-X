
import React from "react";
import TweetAction from "./TweetAction";
import { FaRetweet } from "react-icons/fa";
const TweetCard = ({ tweet }) => {
	const { type, repostedBy, originalPost } = tweet;
	return (
		<div className="tweet-card">
			{type === "Repost" && (
				<div className="tweet-repost-label">
					<FaRetweet style={{ marginRight: "6px", verticalAlign: "middle" }} />
					{repostedBy}
				</div>
			)}
			<div className="tweet-main-row">
				<img
					src="https://randomuser.me/api/portraits/men/32.jpg"
					alt=""
					className="tweet-avatar"
				/>
				<div className="tweet-content">
					<div className="tweet-header">
						<span className="tweet-username">{originalPost.userName}</span>
						<span className="tweet-handle">{originalPost.userHandle}</span>
						<span className="tweet-date">· {originalPost.date}</span>
					</div>
					<div className="tweet-text">{originalPost.content}</div>
					<TweetAction stats={originalPost.stats} />
				</div>
			</div>
		</div>
	);
};

export default TweetCard;
