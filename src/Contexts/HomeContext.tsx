import React, { createContext, useEffect, useState } from "react";
import { cardListType, card_lists_init } from "../interfaces/card_interface";

interface HomeContextNode {
	tab_menus: string[];
	current_tab: string;
	setCurrentTab: Function;
	selected_tab: number;
	setSelectedTab: Function;
	swipe_direction: "left" | "right";

	card_lists_data: cardListType[];
}
const HomeContext = createContext({} as HomeContextNode);

interface Props {}
const HomeProvider: React.FC<Props> = ({ children }) => {
	// TAB START
	const [current_tab, setCurrentTab] = useState<string>("Chat");
	const [swipe_direction, setSwipeDirection] = useState<"left" | "right">(
		"left"
	);
	const tab_menus = ["Chat", "Group", "Class"];

	const [selected_tab, setSelectedTab] = useState(0);
	const setActiveTab = () => {
		let active_index = 0;
		tab_menus.map((tab_menu, key) => {
			if (current_tab === tab_menu) active_index = key;
		});
		setSwipeDirection(selected_tab < active_index ? "left" : "right");
		setSelectedTab(active_index);
	};
	useEffect(setActiveTab, [current_tab]);
	// TAB END

	const [card_lists_data, setCardListsData] = useState<cardListType[]>([
		card_lists_init,
	]);

	const getCardListsData = () => {
		switch (current_tab) {
			case "Chat":
				setCardListsData(dummy_tab_chat_data);
				break;
			case "Group":
				setCardListsData(dummy_tab_group_data);
				break;
			case "Class":
				setCardListsData(dummy_tab_class_data);
				break;
			default:
				break;
		}
	};
	useEffect(getCardListsData, [current_tab]);

	return (
		<HomeContext.Provider
			value={{
				tab_menus,
				selected_tab,
				setSelectedTab,
				swipe_direction,

				current_tab,
				setCurrentTab,
				card_lists_data,
			}}
		>
			{children}
		</HomeContext.Provider>
	);
};

const dummy_tab_chat_data: cardListType[] = [
	{
		type: "chat",
		data: {
			title: "Pak Ogah Ah",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 12,
			picture:
				"https://avatars.dicebear.com/v2/female/8d748f4944f1e100be1776df4f8869cf.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Kuy Ah",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 15,
			picture:
				"https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Ogah Ah",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 12,
			picture:
				"https://avatars.dicebear.com/v2/female/8d748f4944f1e100be1776df4f8869cf.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Kuy Ah",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 15,
			picture:
				"https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Ogah Ah",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 12,
			picture:
				"https://avatars.dicebear.com/v2/female/8d748f4944f1e100be1776df4f8869cf.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Kuy Ah",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 15,
			picture:
				"https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Ogah Ah",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 12,
			picture:
				"https://avatars.dicebear.com/v2/female/8d748f4944f1e100be1776df4f8869cf.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Kuy Ah",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 15,
			picture:
				"https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Ogah Ah",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 12,
			picture:
				"https://avatars.dicebear.com/v2/female/8d748f4944f1e100be1776df4f8869cf.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Kuy Ah",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 15,
			picture:
				"https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Ogah Ah",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 12,
			picture:
				"https://avatars.dicebear.com/v2/female/8d748f4944f1e100be1776df4f8869cf.svg",
		},
	},
	{
		type: "chat",
		data: {
			title: "Pak Kuy Ah",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 15,
			picture:
				"https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg",
		},
	},
];

const dummy_tab_group_data: cardListType[] = [
	{
		type: "group",
		data: {
			title: "Paskamling(10)",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 8,
		},
	},
	{
		type: "group",
		data: {
			title: "Paskibul(20)",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 5,
		},
	},
];

const dummy_tab_class_data: cardListType[] = [
	{
		type: "class",
		data: {
			title: "Kelas Memasak Cupang",
			content: "Wis mangan urung",
			time: new Date(),
			unread_count: 1,
		},
	},
	{
		type: "class",
		data: {
			title: "Kelas praktikum bahasa jawa",
			content: "Naon sia? Chat aing ulah di baca",
			time: new Date(),
			unread_count: 5,
		},
	},
];

export { HomeContext, HomeProvider };
