import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { pushNewMessage } from "features/messagesSlice";

const ChatInput = ({ channelUUID, channelName }) => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState("");

  // establish socket connection

  // const socket = io("http://localhost:4001");

  const handleNewMessage = (e) => {
    e.preventDefault();
    if (input.length <= 0) return;
    socket.emit("messageFromChannel", {
      body: input,
      channelUUID: "1f71b2c2-eb3e-43f8-95af-af083469a77d",
    });
    setInput("");
  };

  useEffect(() => {
    // !!token &&
    console.log("Hello Socket!");
    setSocket(io("http://localhost:4001"));
  }, []);

  useEffect(() => {
    if (!!socket) {
      console.log("socket is ready");
      socket.on("messageToChannel", (message) => {
        console.log(message);
        dispatch(pushNewMessage(message));
      });
    }
  }, [dispatch, socket]);

  return (
    <StyledChatInput>
      <AddCircleRoundedIcon />
      <MessageForm>
        <MessageInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!channelUUID}
          placeholder={
            channelName
              ? `Type message in #${channelName}...`
              : "Please select the channel..."
          }
        />
        {/* <div contentEditable='true'>I'm Editable. Edit me!</div> */}
        <MessageSubmitBtn onClick={handleNewMessage}>
          Send message
        </MessageSubmitBtn>
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
const MessageInput = styled.input`
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
