import React from "react";
import { useHistory } from "react-router";
import ChatRoom from "../../Components/ChatRoom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Room: React.FC = () => {
	const history = useHistory();
	return (
		<React.Fragment>
			<Header
				stick_header
				type="room"
				title="Pak Ogah Ah"
				handleBackNavigation={() => history.goBack()}
			/>
			<ChatRoom />
			<Footer />
		</React.Fragment>
	);
};

export default Room;
