import React from "react";
import { Icons } from "../../Themes/icons";

import "./style.scss";
interface Props {}
const Footer: React.FC<Props> = () => {
	return (
		<footer className="footer">
			{/* <div className="wrapper_footer">
				<div className="wrapper_footer__content">
					<div className="flex_items">
						<div className="button_attach icon_wrapper">
							<button>
								<img src={Icons.plus} />
							</button>
						</div>
						<div className="field_input">
							<input placeholder="type message" />
							<div>
								<button>send</button>
							</div>
						</div>
					</div>
				</div>
			</div> */}
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
