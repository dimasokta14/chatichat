import React, { useContext, useEffect, useState, useRef } from "react";
import clamp from "lodash.clamp";
import { useDrag } from "@use-gesture/react";
import { useSprings, animated, useTransition } from "react-spring";
import FloatingButton from "../../Components/FloatingButton";
import { Tab } from "../../Components/Tab";
import { HomeContext } from "../../Contexts/HomeContext";
import ContentHome from "./ContentHome";
import TabChat from "./Tab/TabChat";
import TabGroup from "./Tab/TabGroup";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Switch, useLocation, Route } from "react-router";
import TabClass from "./Tab/TabClass";

const Home: React.FC = () => {
	const {
		current_tab,
		selected_tab,
		tab_menus,
		setSelectedTab,
		swipe_direction,
	} = useContext(HomeContext);
	const index = useRef(0);
	const [prev_tab, setPrevTab] = useState<number>(-1);

	// useEffect(() => {
	// 	setPrevTab(selected_tab);
	// }, [selected_tab]);

	console.log("swiper", swipe_direction);

	return (
		<React.Fragment>
			<Tab />
			<SwitchTransition>
				<CSSTransition
					key={current_tab}
					timeout={{ enter: 150, exit: 100 }}
					classNames="pageSlider"
					mountOnEnter={false}
					unmountOnExit={true}
				>
					<div className={`global_gutter ${swipe_direction}`}>
						<ContentHome />
					</div>
				</CSSTransition>
			</SwitchTransition>
			{/* {props.map(({ x, display, scale }, i) => (
				<animated.div
					className="global_gutter"
					{...bind()}
					key={i}
					style={{ display, x, touchAction: "pan-x" }}
				>
					<ContentHome />
				</animated.div>
			))}

			{/* {transitions((props, item, key) => (
				<animated.div>
					<Switch location={item}>
						<Route path="/chat" component={TabChat} />
						<Route path="/group" component={TabGroup} />
						<Route path="/class" component={TabClass} />
					</Switch>
				</animated.div>
			))} */}
			{/* <FloatingButton /> */}
		</React.Fragment>
	);
};

export default Home;

// const location = useLocation();
// const [props, set] = useSprings(tab_menus.length, (i) => ({
// 	x: i * window.innerWidth,
// 	scale: 1,
// 	display: "block",
// }));
// const bind = useDrag(
// 	({ active, movement: [mx], direction: [xDirection], cancel }) => {
// 		if (active && Math.abs(mx) > window.innerWidth / 4) {
// 			const tab_index = clamp(
// 				selected_tab + (xDirection > 0 ? -1 : 1),
// 				0,
// 				tab_menus.length - 1
// 			);
// 			setSelectedTab(tab_index);
// 			cancel();
// 		}
// 		console.log("selected", selected_tab);
// 		set.start((i) => {
// 			if (i < selected_tab - 1 || i > selected_tab + 1)
// 				return { display: "none" };

// 			const x = (i - selected_tab) * window.innerWidth + (active ? mx : 0);
// 			const scale = active ? 1 - Math.abs(mx) / window.innerWidth / 2 : 1;
// 			return { x, scale, display: "block" };
// 		});
// 	}
// );
