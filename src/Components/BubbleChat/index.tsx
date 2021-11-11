import React from "react";

import "./style.scss";
interface Props {
	message: string;
	type: "in" | "out";
}
export const BubbleChat: React.FC<Props> = ({ message, type }) => {
	return (
		<div
			className="bubble-wrapper"
			style={{ justifyContent: type === "in" ? "flex-start" : "flex-end" }}
		>
			<div className={`message-${type}`}>{message}</div>
		</div>
	);
};
