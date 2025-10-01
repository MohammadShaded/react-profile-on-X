import React from "react";
import SidebarLeft from "./SidebarLeft";
import MainContent from "./MainContent";
import SidebarRight from "./SidebarRight";
import twitterData from "../data/twitterData";
export default function TwitterMockupPage() {
  return (
    <div className="twitter-mockup-page">
      <div className="sidebar-left-container"><SidebarLeft navigationItems={twitterData.navigationItems} /></div>
      <MainContent
        profile={twitterData.profile}
        tabs={twitterData.tabs}
        posts={twitterData.posts}
        whoToFollowMain={twitterData.whoToFollowMain}
      />
      <SidebarRight
        youMightLike={twitterData.youMightLike}
        trends={twitterData.trends}

      />
    </div>
  );
}