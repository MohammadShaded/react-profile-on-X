import React from "react";
import FollowSuggestionCard from "./FollowSuggestionCard";

const WhoToFollow = ({ suggestions }) => (
  <section className="who-to-follow-section">
    <h2 className="who-to-follow-title">Who to follow</h2>
    <div className="who-to-follow-list">
      {suggestions.map((item, idx) => (
        <FollowSuggestionCard key={item.handle + idx} suggestion={item} />
      ))}
    </div>
    <button className="who-to-follow-more">Show more</button>
  </section>
);

export default WhoToFollow;
