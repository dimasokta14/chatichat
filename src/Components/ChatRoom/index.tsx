import React from "react";
import { BubbleChat } from "../BubbleChat";
import { Badge } from "../Badge";
import "./style.scss";
const ChatRoom = () => {
	return (
		<main>
			<div className="container">
				<div className="chat_room">
					<div className="message-row center">
						<Badge />
					</div>
					<div className="message-row">
						<div className="flex">
							<div className="avatar-wrapper">
								<img
									src="https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg"
									width="30px"
								/>
							</div>
							<div className="message-block">
								<span className="info">Bang jago</span>
								<ul>
									<li className="chat-bubble">
										<BubbleChat
											type="in"
											message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
				mollis nunc, ac ultricies sapien lobortis sit amet. Nam eu nibh ac sem
				ullamcorper rhoncus."
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="message-row">
						<div>
							<div className="message-block">
								<ul>
									<li className="chat-bubble">
										<BubbleChat type="out" message="klo kamu" />
									</li>
									<li className="chat-bubble">
										<BubbleChat type="out" message="iya kamu" />
									</li>
								</ul>
								<span className="info sender">Seen by 2</span>
							</div>
						</div>
					</div>
					<div className="message-row">
						<div className="flex">
							<div className="avatar-wrapper">
								<img
									src="https://avatars.dicebear.com/v2/female/4e95d46ed8448243b661e8baf9329b8e.svg"
									width="30px"
								/>
							</div>
							<div className="message-block">
								<span className="info">Bang jago</span>
								<ul>
									<li className="chat-bubble">
										<BubbleChat
											type="in"
											message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
				mollis nunc, ac ultricies sapien lobortis sit amet. Nam eu nibh ac sem
				ullamcorper rhoncus."
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="message-row">
						<div>
							<div className="message-block">
								<ul>
									<li className="chat-bubble">
										<BubbleChat type="out" message="klo kamu" />
									</li>
									<li className="chat-bubble">
										<BubbleChat type="out" message="iya kamu" />
									</li>
								</ul>
								<span className="info sender">Seen by 2</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ChatRoom;
