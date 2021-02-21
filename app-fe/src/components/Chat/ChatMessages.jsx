import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Message from "../Message/Message";

const ChatMessages = ({ channelId }) => {
	const msg_data = [
		"Hello",
		"test",
		"123",
		"This is very long text. This is very long text. This is very long text. This is very long text. This is very long text. This is very long text. This is very long text.This is very long text. This is very long text. This is very long text. This is very long text. This is very long text. This is very long text. This is very long text.",
		"asd",
	];
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		let messages = [];
		axios.get("http://localhost:3200/api/v1/messages").then(({ data }) => {
			console.log(data);
			setMessages(data);
		});
		//database call
	}, [channelId]);
	return (
		<StyledChatMessages>
			{channelId && (
				<MessagesWrapper>
					{messages.map((message) => (
						<Message key={message.id} message={message} />
					))}
				</MessagesWrapper>
			)}
		</StyledChatMessages>
	);
};

export default ChatMessages;

const StyledChatMessages = styled.div`
	display: flex;
	flex: 1;
	overflow-y: scroll;
`;

const MessagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 0 2rem;
`;
