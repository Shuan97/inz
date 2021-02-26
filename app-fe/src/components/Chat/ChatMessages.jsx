import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Message from "../Message/Message";

const ChatMessages = ({ channelId, messages }) => {
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
