import React from "react";
import FloatingButton from "../Components/FloatingButton";
import Header from "../Components/Header";
import { HomeProvider } from "../Contexts/HomeContext";
import Home from "./Home";

interface Props {}

const Main: React.FC<Props> = (props) => {
	return (
		<div className="height-100 flex flex-column">
			<Header handleBackNavigation={() => {}} type="main" />
			<HomeProvider>
				<Home />
			</HomeProvider>
			<FloatingButton />
		</div>
	);
};

export default Main;
