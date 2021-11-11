import React, { createContext, useEffect, useState } from "react";
import { cardListType, card_lists_init } from "../interfaces/card_interface";

interface ContactContextNode {
	contact_lists: cardListType[];
}
const ContactContext = createContext({} as ContactContextNode);

interface Props {}
const ContactProvider: React.FC<Props> = ({ children }) => {
	const [contact_lists, setContactList] = useState<cardListType[]>([
		card_lists_init,
	]);

	const getContactLists = () => {
		setContactList(dummy_user_lists);
	};
	useEffect(getContactLists, []);

	return (
		<ContactContext.Provider
			value={{
				contact_lists,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

const dummy_user_lists: cardListType[] = [
	{
		type: "contact",
		data: {
			id: "jhg",
			title: "Jhonny Cage",
			picture: "https://avatars.dicebear.com/api/open-peeps/asasaaas.svg",
		},
	},
	{
		type: "contact",
		data: {
			id: "jhg",
			title: "Mail",
			picture: "https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878",
		},
	},
	{
		type: "contact",
		data: {
			id: "jhg",
			title: "Jarjit",
			picture: "https://avatars.dicebear.com/api/micah/.svg",
		},
	},
];

export { ContactContext, ContactProvider };
