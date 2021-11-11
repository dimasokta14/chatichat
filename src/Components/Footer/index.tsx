import React from "react";
import { Icons } from "../../Themes/icons";

import "./style.scss";
interface Props {}
const Footer: React.FC<Props> = () => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<div>
					<button className="footer-add-button">
						<img src={Icons.plus} width="15px" />
					</button>
				</div>
				<div className="footer-inputs">
					<div className="input">
						<input className="input-message" placeholder="Type a message..." />
					</div>
					<div className="action">
						<button className="send-button">Send</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
