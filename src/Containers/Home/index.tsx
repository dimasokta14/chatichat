import React, { useContext } from "react";
import {
	CSSTransition,
	SwitchTransition,
	TransitionGroup,
} from "react-transition-group";
import FloatingButton from "../../Components/FloatingButton";
import { Tab } from "../../Components/Tab";
import { HomeContext } from "../../Contexts/HomeContext";
import ContentHome from "./ContentHome";

const Home: React.FC = () => {
	const { current_tab, selected_tab } = useContext(HomeContext);
	console.log("selected_tab", selected_tab);

	return (
		<React.Fragment>
			<Tab />
			<SwitchTransition>
				<CSSTransition
					key={current_tab}
					timeout={{ enter: 20, exit: 10 }}
					classNames="pageSlider"
					mountOnEnter={false}
					unmountOnExit={true}
				>
					<div
						className={`global_gutter ${selected_tab === 0 ? "right" : "left"}`}
					>
						<ContentHome />
					</div>
				</CSSTransition>
			</SwitchTransition>
			<FloatingButton />
		</React.Fragment>
	);
};

export default Home;
