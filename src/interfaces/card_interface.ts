export type cardListType = {
	type: "chat" | "group" | "class" | "contact";
	data: {
		id?: string;
		title: string;
		content?: string;
		time?: Date;
		picture?: string;
		unread_count?: number;
	};
};

export const card_lists_init: cardListType = {
	type: "chat",
	data: {
		id: "",
		title: "",
		content: "",
		time: new Date(),
		picture: "",
		unread_count: 0,
	},
};
