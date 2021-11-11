import React from "react";
import ContactList from "../../Components/ContactLists";
import { ContactProvider } from "../../Contexts/ContactContext";

const Contact: React.FC = () => {
	return (
		<ContactProvider>
			<ContactList />
		</ContactProvider>
	);
};

export default Contact;
