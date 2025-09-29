import React from "react";
import SidebarLeft from "./SidebarLeft";
import twitterData from "../data/twitterData";
export default function TwitterMockupPage() {
  return (
    <div className="twitter-mockup-page">
      <SidebarLeft navigationItems ={ twitterData.navigationItems}/>
    </div>
  );
}