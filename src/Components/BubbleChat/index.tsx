import React from "react";
import { Icons } from "../../Themes/icons";

import "./style.scss";
interface Props {
	message?: string;
	type: "in" | "out";
	message_type?: "image" | "file" | "text" | "video";
	attachment_url?: string;
}
export const BubbleChat: React.FC<Props> = ({
	message = "",
	type,
	message_type = "text",
	attachment_url = "",
}) => {
	return (
		<div
			className="bubble-wrapper"
			style={{ justifyContent: type === "in" ? "flex-start" : "flex-end" }}
		>
			{message_type === "image" ? (
				<img
					src={attachment_url}
					alt="chat-img"
					width="130px"
					style={{ borderRadius: "10px" }}
				/>
			) : message_type === "file" ? (
				<div className="file-wrapper">
					<img src={Icons.file_purple} width="30px" />
					<div className="file-content">
						<h3 className="file-tittle">
							Tips_on_handling_bad_wind_turbine_acting_on.MP4
						</h3>
						<span className="file-size-info">90 MB</span>
					</div>
				</div>
			) : message_type === "video" ? (
				<div className="video-player">
					<iframe
						style={{ borderRadius: "10px" }}
						width="230"
						height="130"
						src="https://www.youtube.com/embed/7MFKy7DJsCY"
						title="video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			) : (
				<div className={`message-${type}`}>{message}</div>
			)}
		</div>
	);
};
