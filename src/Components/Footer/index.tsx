import React, { useState } from "react";
import { Icons } from "../../Themes/icons";

import "./style.scss";
interface Props {
	is_chat_room?: boolean;
	children?: any;
}
const Footer: React.FC<Props> = ({ is_chat_room = true, children }) => {
	const [is_open_attachment_tab, setIsOpenAttachmentTab] =
		useState<boolean>(false);
	return (
		<footer className={`footer ${is_open_attachment_tab ? "open-menu" : ""}`}>
			<div
				className="footer-wrapper"
				style={!is_chat_room ? { gridTemplateColumns: "90% 10%" } : {}}
			>
				{is_chat_room && (
					<>
						<div>
							<button
								className="footer-add-button"
								onClick={() => setIsOpenAttachmentTab(!is_open_attachment_tab)}
							>
								<img
									className={
										is_open_attachment_tab ? "rotate-in" : "rotate-out"
									}
									src={Icons.plus}
									width="15px"
								/>
							</button>
						</div>
						<div className="footer-inputs">
							<div className="input">
								<input
									className="input-message"
									placeholder="Type a message..."
								/>
							</div>
							<div className="action">
								<button className="send-button">Send</button>
							</div>
						</div>
					</>
				)}
				{children}
			</div>
			<div
				className={`attachment-wrapper ${
					is_open_attachment_tab ? "open" : "close"
				}`}
			>
				<div className="attachment-wrapper__box-button">
					<label className="btn-rounded" htmlFor="open-gallery">
						<img src={Icons.picture_icon} />
					</label>
					<input type="file" id="open-gallery" style={{ display: "none" }} />
					<span className="btn-name">Picture</span>
				</div>
				<div className="attachment-wrapper__box-button">
					<button className="btn-rounded">
						<img src={Icons.camera} />
					</button>
					<span className="btn-name">Camera</span>
				</div>
				<div className="attachment-wrapper__box-button">
					<button className="btn-rounded">
						<img src={Icons.file} />
					</button>
					<span className="btn-name">File</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
