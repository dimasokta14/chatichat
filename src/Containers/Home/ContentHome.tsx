import React, { useContext } from "react";
import { HomeContext } from "../../Contexts/HomeContext";
import TabChat from "./Tab/TabChat";
import TabClass from "./Tab/TabClass";
import TabGroup from "./Tab/TabGroup";

const ContentHome: React.FC = () => {
	const { current_tab } = useContext(HomeContext);
	return (
		<div className="page" style={{ height: "100%" }}>
			{current_tab === "Chat" && <TabChat />}
			{current_tab === "Group" && <TabGroup />}
			{current_tab === "Class" && <TabClass />}
		</div>
	);
};

export default ContentHome;
