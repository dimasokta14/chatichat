import React, { Component } from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Main from "./Containers";
import Contact from "./Containers/Contact";
import Room from "./Containers/Room";

import routes from "./routes";
const App = (props: any) => {
	const location = useLocation();
	// return (
	// 	<div className="height-100">
	// 		{/* <BrowserRouter>
	// 			<Switch>
	// 				{routes.map((route, key) => {
	// 					return (
	// 						<RouteComponent
	// 							key={key}
	// 							exact={true}
	// 							name={route.name}
	// 							path={route.path}
	// 							component={route.component}
	// 							props={props}
	// 						/>
	// 					);
	// 				})}
	// 			</Switch>
	// 		</BrowserRouter> */}
	// 		<div className="height-100 flex flex-column">
	// 			<Switch>
	// 				<Route exact path="/" component={Main} />
	// 				{/* <Route path="/room/:id" component={Room} /> */}
	// 				{/* <Route path="/contact" component={Contact} /> */}
	// 			</Switch>
	// 		</div>
	// 	</div>
	// );	const location: any = useLocation();
	const transitions = useTransition(location, {
		keys: (location) => location.pathname,
		from: {
			display: "block",
			transform:
				location.pathname !== "/"
					? "translate3d(100%, 0, 0)"
					: "translate3d(-100%, 0, 0)",
		},
		enter: {
			transform: "translate3d(0, 0, 0)",
		},
		leave: {
			display: "none",
			transform:
				location.pathname !== "/"
					? "translate3d(-100%, 0, 0)"
					: "translate3d(100%, 0, 0)",
		},
	});
	return transitions((props, item, key: any) => (
		<animated.div style={props} key={key}>
			<Switch location={item}>
				<Route exact path="/" component={Main} />
				<Route path="/room/:id" component={Room} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</animated.div>
	));
};

export default App;
