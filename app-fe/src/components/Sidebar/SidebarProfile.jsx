import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import HeadsetRoundedIcon from "@material-ui/icons/HeadsetRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const SidebarProfile = () => {
  const user = useSelector(selectUser);

  return (
    <StyledSidebarProfile>
      <Avatar src={user?.photo} onClick={() => null} />
      <ProfileInfo>
        <h3>{user?.displayName}</h3>
        <p>Shuan#0000</p>
      </ProfileInfo>
      <ProfileIcons>
        <MicRoundedIcon />
        <HeadsetRoundedIcon />
        <SettingsRoundedIcon onClick={() => null} />
      </ProfileIcons>
    </StyledSidebarProfile>
  );
};

export default SidebarProfile;

const StyledSidebarProfile = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
`;

const ProfileInfo = styled.div`
  margin: 0 0.5rem;
  flex: 1;
  overflow: hidden;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h3 {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.textPrimary};
  }
  p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.675rem;
  }
`;
const ProfileIcons = styled.div`
  display: flex;
  svg {
    margin: 0.25rem;
    font-size: 1.25rem;
  }
`;
