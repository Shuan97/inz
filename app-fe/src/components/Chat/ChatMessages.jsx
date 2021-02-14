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
	const [messages, setMessages] = useState(msg_data);

	useEffect(() => {
		//database call
	}, [channelId]);
	return (
		<StyledChatMessages>
			{channelId && (
				<MessagesWrapper>
					{messages.map((message) => (
						<Message message={message} />
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
`;

const MessagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 0 2rem;
`;
