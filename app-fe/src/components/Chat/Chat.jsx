import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import styled from "styled-components/macro";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { useSelector } from "react-redux";
import { getUser } from "../../features/userSlice";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import API from "../../utils/API";

const Chat = () => {
  // const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [messages, setMessages] = useState([]);

  // const handleOnMessage = (newMessage) => {
  // setMessages(...messages, newMessage);
  // console.log("new message: ", newMessage);
  // axios
  // 	.post(
  // 		"http://localhost:3200/api/v1/messages",
  // 		{
  // 			body: "Hello Messages!",
  // 			channelUUID: "d74e70a5-7015-4a1d-b0e6-eb0cb4279b11",
  // 		},
  // 		config
  // 	)
  // 	.then(({ data }) => {
  // 		console.log(data);
  // 		// setMessages(data);
  // 	});
  // };

  useEffect(() => {
    API.get("/messages").then(({ data }) => {
      console.log(data);
      setMessages(data);
    });
    // database call
  }, [channelId]);

  useEffect(() => {}, [channelId]);
  return (
    <StyledChat>
      <ChatHeader channelName={channelName} />
      <ChatMessages channelId={channelId} messages={messages} />
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
