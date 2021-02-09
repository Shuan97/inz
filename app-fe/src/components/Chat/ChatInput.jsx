import React from "react";
import styled from "styled-components/macro";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import GifRoundedIcon from "@material-ui/icons/GifRounded";

const ChatInput = () => {
	return (
		<StyledChatInput>
			<AddCircleRoundedIcon />
			<MessageForm>
				<MessageInput contenteditable={"true"}></MessageInput>
				<div contenteditable='true'>I'm Editable. Edit me!</div>
				<MessageSubmitBtn>Send message</MessageSubmitBtn>
			</MessageForm>
			<ChatInputIcons>
				<GifRoundedIcon />
				<EmojiEmotionsRoundedIcon />
			</ChatInputIcons>
		</StyledChatInput>
	);
};

export default ChatInput;

const StyledChatInput = styled.div`
	display: flex;
	align-items: center;
	height: 4rem;
	margin: 2rem;
	padding: 1.5rem;
	border-radius: 1rem;
	/* background: ${({ theme }) => theme.backgroundPrimary}; */
	background: #444;
	box-shadow: 0 0 4px ${({ theme }) => theme.borderPrimary};
`;

const MessageForm = styled.form`
	display: flex;
	flex: 1;
	margin: 0 2rem;
`;

// const MessageInput = styled.div`
// 	flex: 1;
// 	height: 1.25rem;
// 	color: ${({ theme }) => theme.textPrimary};
// 	background: transparent;
// 	font-size: 0.875rem;
// 	font-family: inherit;
// 	border: none;
// 	outline: none;
// 	background: #666;
// `;
const MessageInput = styled.textarea.attrs(() => ({
	placeholder: "Type your message...",
}))`
	flex: 1;
	height: 1.25rem;
	color: ${({ theme }) => theme.textPrimary};
	background: transparent;
	font-size: 0.875rem;
	font-family: inherit;
	border: none;
	outline: none;
`;

const MessageSubmitBtn = styled.button.attrs(() => ({
	type: "submit",
}))`
	display: none;
`;

const ChatInputIcons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		margin: 0.25rem;
	}
`;
