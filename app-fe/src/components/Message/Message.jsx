import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Avatar } from "@material-ui/core";

const Message = ({ message }) => {
  const date = new Date(message.createdAt).toLocaleString();
  const user = message.user;

  return (
    <MessageListItem>
      {user && (
        <MessageContainer>
          <Avatar src='https://avatars.githubusercontent.com/u/35654946?s=460&u=177d19ab4fef81db30b3bc104be0871e00818822&v=4' />
          <MessageWrapper>
            <MessageHeader>
              <MessageLabel>{user.name}</MessageLabel>
              <MessageTimestamp>{date}</MessageTimestamp>
            </MessageHeader>
            <MessageBodyContent>{message.body}</MessageBodyContent>
          </MessageWrapper>
        </MessageContainer>
      )}
    </MessageListItem>
  );
};

export default Message;

const MessageListItem = styled.div`
  display: flex;
  padding-right: 3rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`;

const MessageBodyContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: #444;
  font-size: 0.875rem;
  box-shadow: 0 0 4px ${({ theme }) => theme.borderPrimary};
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  max-width: 75%;
  margin-left: 1rem;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.25rem;
`;

const MessageLabel = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const MessageTimestamp = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.625rem;
  font-size: x-small;
`;
