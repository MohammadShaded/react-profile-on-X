
import React from "react";

import TweetCard from "./TweetCard";

const Posts = ({ posts }) => (
   <div>
	   {posts.map((tweet) => (
		   <TweetCard key={tweet.id} tweet={tweet} />
	   ))}
   </div>
);

export default Posts;
