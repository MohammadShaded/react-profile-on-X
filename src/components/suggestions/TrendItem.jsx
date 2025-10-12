import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import '../../styles/SidebarRight.css';

const TrendItem = ({ trend }) => {
  const { category, topic, posts, subtitle } = trend;
  return (
    <div className="trend-item">
      <div className="trend-meta-row">
        <span className="trend-category">{category}</span>
        <FaEllipsisH className="trend-more-icon" />
      </div>
      <div className="trend-title">{topic}</div>
      <div className="trend-posts">{posts} posts</div>
    </div>
  );
};

export default TrendItem;
