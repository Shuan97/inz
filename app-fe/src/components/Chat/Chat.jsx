import React from "react";
import ChatHeader from "./ChatHeader";
import styled from "styled-components/macro";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectChannelId, selectChannelName } from "../../features/appSlice";

const Chat = () => {
	const user = useSelector(selectUser);
	const channelId = useSelector(selectChannelId);
	const channelName = useSelector(selectChannelName);
	return (
		<StyledChat>
			<ChatHeader channelName={channelName} />
			<ChatMessages channelId={channelId} />
			<ChatInput channelId={channelId} channelName={channelName} />
		</StyledChat>
	);
};

export default Chat;

const StyledChat = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;
