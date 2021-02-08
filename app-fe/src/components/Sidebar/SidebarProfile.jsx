import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import HeadsetRoundedIcon from "@material-ui/icons/HeadsetRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";

const SidebarProfile = () => {
	return (
		<StyledSidebarProfile>
			<Avatar src='https://avatars.githubusercontent.com/u/35654946?s=460&u=177d19ab4fef81db30b3bc104be0871e00818822&v=4' />
			<ProfileInfo>
				<h3>Jarek Matura</h3>
				<p>Shuan#0000</p>
			</ProfileInfo>
			<ProfileIcons>
				<MicRoundedIcon />
				<HeadsetRoundedIcon />
				<SettingsRoundedIcon />
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
