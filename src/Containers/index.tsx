import React from "react";
import Header from "../Components/Header";
import { HomeProvider } from "../Contexts/HomeContext";
import Home from "./Home";

interface Props {}

const Main: React.FC<Props> = (props) => {
	return (
		<div className="height-100 flex flex-column">
			<Header />
			<HomeProvider>
				<Home />
			</HomeProvider>
		</div>
	);
};

export default Main;
