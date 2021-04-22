import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { setChannelInfo } from "features/channelsSlice";

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();

  return (
    <StyledSidebarChannel
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelUUID: id,
            channelName: channelName,
          })
        )
      }
    >
      <ChannelLabel>
        <span>#</span>
        {channelName}
      </ChannelLabel>
    </StyledSidebarChannel>
  );
};

export default SidebarChannel;

const StyledSidebarChannel = styled.div`
  padding: 0.5rem 1rem;
  user-select: none;
  cursor: pointer;
`;

const ChannelLabel = styled.h4`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSecondary};

  ${StyledSidebarChannel}:hover && {
    color: ${({ theme }) => theme.textPrimary};
  }

  span {
    font-size: 1.25rem;
    margin-right: 0.375rem;
  }
`;
