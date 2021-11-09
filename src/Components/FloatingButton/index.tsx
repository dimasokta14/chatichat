import React from "react";
import { Icons } from "../../Themes/icons";
import "./style.scss";

interface Props {}
const FloatingButton: React.FC<Props> = () => {
	return (
		<div className="wrapper">
			<button className="btn_rounded" onClick={() => alert("bla")}>
				<img src={Icons.plus} alt="plus-icon" width="25px" />
			</button>
		</div>
	);
};

export default FloatingButton;
