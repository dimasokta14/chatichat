import React, { useContext } from "react";
import Header from "../Header";
import { useHistory } from "react-router";
import { ContactContext } from "../../Contexts/ContactContext";
import { Card } from "../Card";
import Footer from "../Footer";
import "./style.scss";
import { Badge } from "../Badge";
import { Icons } from "../../Themes/icons";

interface Props {}
const ContactList: React.FC<Props> = () => {
	const history = useHistory();
	const { contact_lists } = useContext(ContactContext);
	return (
		<React.Fragment>
			<Header
				stick_header
				type="contact"
				title="Parker(10)"
				handleBackNavigation={() => history.goBack()}
			/>
			<div style={{ height: "100%" }} className="container">
				<ul>
					{contact_lists.map((card: any, index: number) => {
						return (
							<li
								key={`card - ${index} - ${card.data.title}`}
								onClick={() => alert("contact added")}
							>
								<Card
									picture={card.data.picture}
									title={card.data.title}
									show_notif={false}
								/>
							</li>
						);
					})}
				</ul>
			</div>
			<Footer is_chat_room={false}>
				<div className="contact-list-wrapper">
					<ul>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
						<li>
							<div className="contact-avatar">
								<span className="clickable-badge">
									<img src={Icons.plus} width="10px" />
								</span>
								<img
									src="https://avatars.dicebear.com/api/micah/aaas.svg?b=%23a17878"
									width="45px"
								/>
							</div>
						</li>
					</ul>
				</div>
				<div
					className="footer-inputs"
					style={{ borderLeft: "1px solid #eaeaea" }}
				>
					<div className="action">
						<button className="send-button">Chat</button>
					</div>
				</div>
			</Footer>
		</React.Fragment>
	);
};

export default ContactList;
