import React from 'react';
import FollowSuggestionCardSmall from './FollowSuggestionCardSmall';
import '../../styles/SidebarRight.css';

const YouMightLike = ({ youMightLike }) => (
  <section className="you-might-like-section">
    <h2 className="you-might-like-title">You might like</h2>
    <div className="you-might-like-list">
      {youMightLike.map((item, idx) => (
        <FollowSuggestionCardSmall key={item.handle + idx} suggestion={item} />
      ))}
    </div>
    <a href="#" className="show-more-link">Show more</a>
  </section>
);

export default YouMightLike;
