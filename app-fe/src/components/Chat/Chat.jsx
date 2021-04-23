import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import styled from "styled-components/macro";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectChannelUUID, selectChannelName } from "features/channelsSlice";
import API from "../../utils/API";
import { fetchMessagesByChannel } from "features/messagesSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const channelUUID = useSelector(selectChannelUUID);
  const channelName = useSelector(selectChannelName);

  useEffect(() => {
    console.log("Hello Chat!@");
    !!channelUUID && dispatch(fetchMessagesByChannel());
  }, [dispatch, channelUUID]);

  // const handleOnMessage = (newMessage) => {
  // setMessages(...messages, newMessage);
  // console.log("new message: ", newMessage);
  // API
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

  // useEffect(() => {
  //   API.get("/messages").then(({ data }) => {
  //     console.log(data);
  //     setMessages(data);
  //   });
  // }, [channelUUID]);

  // useEffect(() => {}, [channelUUID]);
  return (
    <StyledChat>
      <ChatHeader channelName={channelName} />
      <ChatMessages />
      <ChatInput channelUUID={channelUUID} channelName={channelName} />
    </StyledChat>
  );
};

export default Chat;

const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
