import React from 'react';
import TrendItem from './TrendItem';

const TrendsForYou = ({ trends }) => (
  <section className="trends-for-you-section">
    <h2 className="trends-for-you-title">Trends for you</h2>
    <div className="trends-for-you-list">
      {trends.map((trend, idx) => (
        <TrendItem key={trend.title + idx} trend={trend} />
      ))}
    </div>
    <a href="#" className="show-more-link">Show more</a>
  </section>
);

export default TrendsForYou;
