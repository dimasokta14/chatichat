import { lazy, Suspense } from "react";

const Home = () => {
	const Component = lazy(() => import("./Containers/Home"));
	return <Component />;
};

const Room = () => {
	const Component = lazy(() => import("./Containers/Room"));
	return <Component />;
};

const Contact = () => {
	const Component = lazy(() => import("./Containers/Room"));
	return <Component />;
};

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/room/:id",
		name: "Room",
		component: Room,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
];

export default routes;
