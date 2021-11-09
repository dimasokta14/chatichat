export type cardListType = {
	type: "chat" | "group" | "class" | "contact";
	data: {
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
		title: "",
		content: "",
		time: new Date(),
		picture: "",
		unread_count: 0,
	},
};
