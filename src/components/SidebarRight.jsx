import React from 'react';
import SearchBox from './Common/SearchBox';
import YouMightLike from './suggestions/YouMightLike';
import TrendsForYou from './suggestions/TrendsForYou';
import FooterRight from './layout/FooterRight';
import '../styles/SidebarRight.css';

const SidebarRight = ({ youMightLike, trends }) => (
  <aside className="sidebar-right">
    <SearchBox />
    <YouMightLike youMightLike={youMightLike} />
    <TrendsForYou trends={trends} />
    <FooterRight />
  </aside>
);

export default SidebarRight;
