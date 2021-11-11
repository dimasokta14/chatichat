import React from "react";
import { useHistory } from "react-router";
import FloatingButton from "../Components/FloatingButton";
import Header from "../Components/Header";
import { HomeProvider } from "../Contexts/HomeContext";
import Home from "./Home";

interface Props {}

const Main: React.FC<Props> = (props) => {
	const history = useHistory();
	return (
		<div className="height-100 flex flex-column">
			<Header handleBackNavigation={() => {}} type="main" />
			<HomeProvider>
				<Home />
			</HomeProvider>
			<FloatingButton handleClick={() => history.push("/contact")} />
		</div>
	);
};

export default Main;
