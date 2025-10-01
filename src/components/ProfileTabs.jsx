import React, { useState } from "react";




const ProfileTabs = ({ tabs, onTabChange }) => {
	const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || "posts");

	const handleTabClick = (id) => {
		setActiveTab(id);
		if (onTabChange) onTabChange(id);
	};

	return (
		<nav className="profile-tabs-nav">
			<ul className="profile-tabs-list">
				{tabs.map((tab) => (
					<li
						key={tab.id}
						className={`profile-tab-item${activeTab === tab.id ? " active" : ""}`}
						onClick={() => handleTabClick(tab.id)}
					>
						<span className="profile-tab-label">{tab.label}</span>
						{activeTab === tab.id && <span className="profile-tab-underline" />}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default ProfileTabs;
