import React from "react";
import styled from "styled-components/macro";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const ChatHeader = ({channelName}) => {
	const inputRef = React.createRef();
	return (
		<StyledChatHeader>
			<ChatHeaderContent>
				<ChatTitle>
					<h4>{channelName}</h4>
				</ChatTitle>
			</ChatHeaderContent>
			<ChatToolbar>
				<ChatSearchWrapper>
					<SearchRoundedIcon />
					<ChatSearch
						ref={inputRef}
						onMouseEnter={() => {
							inputRef.current.focus();
						}}
					/>
				</ChatSearchWrapper>
				<PeopleAltRoundedIcon />
				<NotificationsRoundedIcon />
				<SettingsRoundedIcon />
			</ChatToolbar>
		</StyledChatHeader>
	);
};

export default ChatHeader;

const StyledChatHeader = styled.div`
	display: flex;
	height: 3rem;
	padding: 0 2rem;
	background: ${({ theme }) => theme.backgroundPrimary};
	border-bottom: 2px solid ${({ theme }) => theme.borderPrimary};
`;
const ChatHeaderContent = styled.div`
	display: flex;
	flex: 1;
	overflow: hidden;
`;
const ChatTitle = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.textPrimary};

	h4 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

const ChatToolbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		margin: 0.25rem;
	}
`;

const ChatSearchWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 1rem;
	padding: 0 0.25rem;
	background: ${({ theme }) => theme.backgroundTertiary};
	border-radius: 3px;
`;
const ChatSearch = styled.input.attrs(() => ({
	placeholder: "Search...",
}))`
	height: 100%;
	width: 150px;
	color: ${({ theme }) => theme.textPrimary};
	background: transparent;
	font-size: 0.875rem;
	border: none;
	outline: none;
`;
