import React, { useContext } from "react";
import { HomeContext } from "../../Contexts/HomeContext";
import "./style.scss";
interface Props {}
export const Tab: React.FC<Props> = () => {
	const { tab_menus, selected_tab, setCurrentTab } = useContext(HomeContext);
	return (
		<div className="sticky_pos">
			<ul className="tab">
				{tab_menus.map((tab: any, index: number) => {
					return (
						<li
							key={`${index} - ${tab}`}
							className={`tab-item ${
								tab_menus[selected_tab] === tab ? "active" : ""
							}`}
							onClick={() => setCurrentTab(tab)}
						>
							{tab}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
