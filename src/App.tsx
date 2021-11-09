import React, { Component } from "react";
import { Switch, useLocation, Route, BrowserRouter } from "react-router-dom";
import Main from "./Containers";
import Contact from "./Containers/Contact";
import Home from "./Containers/Home";
import Room from "./Containers/Room";

import routes from "./routes";
const App = (props: any) => {
	// const location = useLocation();
	return (
		<div className="height-100">
			{/* <BrowserRouter>
				<Switch>
					{routes.map((route, key) => {
						return (
							<RouteComponent
								key={key}
								exact={true}
								name={route.name}
								path={route.path}
								component={route.component}
								props={props}
							/>
						);
					})}
				</Switch>
			</BrowserRouter> */}
			<div className="height-100 flex flex-column">
				<Switch>
					<Route exact path="/" component={Main} />
					{/* <Route path="/room/:id" component={Room} /> */}
					{/* <Route path="/contact" component={Contact} /> */}
				</Switch>
			</div>
		</div>
	);
};

export default App;
