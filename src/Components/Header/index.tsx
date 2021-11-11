import React, { useEffect, useRef, useState } from "react";
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
	const headerRef = useRef(null);
	const [is_scroll_up, setIsScrollUp] = useState<boolean>(false);
	useEffect(() => {
		const header_current: any = headerRef.current;
		if (is_scroll_up) {
			console.log("header_curr", header_current);
		}
	}, [is_scroll_up]);

	return (
		<header
			ref={headerRef}
			className={`header_global${stick_header ? " stick" : ""}`}
		>
			<nav className="global_gutter header_navigator">
				<div className="left-component">
					<div onClick={() => handleBackNavigation()}>
						<img src={Icons.arrow_left} width="20px" />
					</div>
					{type === "main" && <h1 className="title">Message</h1>}
					{type === "room" && (
						<div className="header-room">
							<div className="image-box">
								<img
									className="room-ava"
									src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
									width="40px"
								/>
								<img
									className="room-ava"
									src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg"
									width="40px"
									style={{ marginLeft: "-30px" }}
								/>
							</div>
							<h2 className="title-room">{title}</h2>
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
