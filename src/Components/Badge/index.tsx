import React from "react";

import "./style.scss";
interface Props {
	content: string;
	rounded?: boolean;
}
export const Badge: React.FC<Props> = ({ content, rounded = false }) => {
	return <span className="badge badge-pill badge-info">{content}</span>;
};
