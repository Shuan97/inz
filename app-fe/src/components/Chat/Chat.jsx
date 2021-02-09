import React from "react";
import ChatHeader from "./ChatHeader";
import styled from "styled-components/macro";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat = () => {
	return (
		<StyledChat>
			<ChatHeader />
			<ChatMessages />
			<ChatInput />
		</StyledChat>
	);
};

export default Chat;

const StyledChat = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;
