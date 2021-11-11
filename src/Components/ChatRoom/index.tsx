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
						<Badge content="Next year" />
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
									<li className="chat-bubble">
										<BubbleChat
											type="out"
											message_type="image"
											attachment_url="https://images.unsplash.com/photo-1636522337224-587680b3ca77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
										/>
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
									<li className="chat-bubble">
										<BubbleChat
											type="in"
											message_type="file"
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
									<li className="chat-bubble">
										<BubbleChat type="out" message_type="video" />
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
