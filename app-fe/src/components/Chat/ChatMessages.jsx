import React from "react";
import styled from "styled-components/macro";
import Message from "../Message/Message";

const ChatMessages = () => {
	const message = [
		"Hello",
		"test",
		"123",
		"This is very long text. This is very long text. This is very long text. This is very long text. This is very long text. This is very long text. This is very long text.",
		"asd",
	];
	return (
		<StyledChatMessages>
			<MessagesWrapper>
				<Message message={message[0]} />
				<Message message={message[1]} />
				<Message message={message[2]} />
				<Message message={message[3]} />
				<Message message={message[4]} />
			</MessagesWrapper>
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
