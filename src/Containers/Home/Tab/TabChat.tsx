import React, { useContext } from "react";
import { HomeContext } from "../../../Contexts/HomeContext";
import { Card } from "../../../Components/Card";
import { useHistory } from "react-router";

const TabChat: React.FC = () => {
	const { card_lists_data } = useContext(HomeContext);
	const history = useHistory();
	return (
		<ul>
			{card_lists_data.map((card: any, index: number) => {
				return (
					<li
						key={`card - ${index} - ${card.data.title}`}
						onClick={() => history.push(`/room/${card.data.title}`)}
					>
						<Card
							picture={card.data.picture}
							show_notif={card.data?.unread_count > 0}
							title={card.data.title}
							message_content={card.data.content}
							count_message={card.data.unread_count}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default TabChat;
