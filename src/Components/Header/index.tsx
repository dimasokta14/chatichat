import React from "react";
import { Icons } from "../../Themes/icons";

import "./style.scss";

interface Props {}
const Header: React.FC<Props> = () => {
	return (
		<header className="header-global">
			<nav className="global_gutter header_navigator">
				<div className="left-component">
					<img src={Icons.arrow_left} width="20px" />
					<h1 className="title">Message</h1>
				</div>
				<div className="right-component">
					<img src={Icons.search} width="20px" />
				</div>
			</nav>
		</header>
	);
};
export default Header;
