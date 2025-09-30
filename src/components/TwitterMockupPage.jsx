import React from "react";
import SidebarLeft from "./SidebarLeft";
import MainContent from "./MainContent";
import twitterData from "../data/twitterData";
export default function TwitterMockupPage() {
  return (
    <div className="twitter-mockup-page">
      <SidebarLeft navigationItems={twitterData.navigationItems} />
      <MainContent
        profile={twitterData.profile}
        posts={twitterData.posts}
        whoToFollowMain={twitterData.whoToFollowMain}
      />
    </div>
  );
}