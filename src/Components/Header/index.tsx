import React from "react";
import { Icons } from "../../Themes/icons";

import "./style.scss";

interface Props {
	type: "room" | "main" | "contact";
	title?: string;
	handleBackNavigation: Function;
	stick_header?: boolean;
}
const Header: React.FC<Props> = ({
	type = "main",
	title = "",
	handleBackNavigation,
	stick_header = false,
}) => {
	return (
		<header className={`header_global${stick_header ? " stick" : ""}`}>
			<nav className="global_gutter header_navigator">
				<div className="left-component">
					<div onClick={() => handleBackNavigation()}>
						<img src={Icons.arrow_left} width="20px" />
					</div>
					{type === "main" && <h1 className="title">Message</h1>}
					{type === "room" && (
						<div>
							<h1>{title}</h1>
						</div>
					)}
				</div>
				<div className="right-component">
					{type !== "room" && <img src={Icons.search} width="20px" />}
				</div>
			</nav>
		</header>
	);
};
export default Header;
