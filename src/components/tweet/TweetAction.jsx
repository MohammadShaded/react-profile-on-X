
import React from "react";
import { FaRegComment, FaRetweet, FaRegHeart, FaChartBar, FaShare } from "react-icons/fa";

const TweetAction = ({ stats }) => (
	<div className="tweet-actions-row">
		<button className="tweet-action-btn">
			<FaRegComment />
			<span>{stats.comments}</span>
		</button>
		<button className="tweet-action-btn">
			<FaRetweet />
			<span>{stats.retweets}</span>
		</button>
		<button className="tweet-action-btn">
			<FaRegHeart />
			<span>{stats.likes}</span>
		</button>
		<button className="tweet-action-btn">
			<FaChartBar />
			<span>{stats.views}</span>
		</button>
		<button className="tweet-action-btn">
			<FaShare />
		</button>
	</div>
);

export default TweetAction;
