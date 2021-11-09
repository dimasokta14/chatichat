import React from "react";

import "./style.scss";
interface Props {
	picture?: string;
	title: string;
	show_notif: any;
	count_message?: number;
	message_content?: string;
}
export const Card: React.FC<Props> = ({
	picture = "",
	title,
	show_notif,
	count_message = 0,
	message_content = "",
}) => {
	return (
		<div className="card">
			<div className="card__content">
				{picture && (
					<div className="avatar_wrapper">
						<div className="border">
							<img alt="avatar" src={picture} />
						</div>
					</div>
				)}
				<div className="text-wrapper">
					<div className="primary">
						<div className="title">
							<span>{title}</span>
						</div>
						{show_notif && (
							<div className="dot_notif">
								<span>{count_message}</span>
							</div>
						)}
					</div>
					{message_content && (
						<div className="secondary">
							<div className="message">
								<span>
									<div className="icon_check-read" />
									<span className={`text ${count_message > 0 ? "active" : ""}`}>
										{message_content}
									</span>
									<span className="time">10:54</span>
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
