import React from "react";
import { Icons } from "../../Themes/icons";
import "./style.scss";

interface Props {
	handleClick: Function;
}
const FloatingButton: React.FC<Props> = ({ handleClick }) => {
	return (
		<div className="wrapper">
			<button className="btn_rounded" onClick={() => handleClick()}>
				<img src={Icons.plus} alt="plus-icon" width="25px" />
			</button>
		</div>
	);
};

export default FloatingButton;
