import React from "react";
import styled from "styled-components/macro";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import SidebarChannel from "./SidebarChannel";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const SidebarContent = () => {
	return (
		<StyledSidebarContent>
			<ChannelHeaderWrapper>
				<ChannelHeader>
					<ExpandMoreRoundedIcon />
					<h2>Text channels</h2>
				</ChannelHeader>
				<StyledAddRoundedIcon />
			</ChannelHeaderWrapper>
			<ChannelsList>
				<SidebarChannel></SidebarChannel>
				<SidebarChannel></SidebarChannel>
				<SidebarChannel></SidebarChannel>
				<SidebarChannel></SidebarChannel>
			</ChannelsList>

			<ChannelHeaderWrapper>
				<ChannelHeader>
					<ExpandMoreRoundedIcon />
					<h2>Voice channels</h2>
				</ChannelHeader>
				<StyledAddRoundedIcon />
			</ChannelHeaderWrapper>
		</StyledSidebarContent>
	);
};

export default SidebarContent;

const StyledSidebarContent = styled.div`
	height: 100%;
`;

const ChannelHeaderWrapper = styled.div`
	display: flex;
	padding: 0.5rem;
	color: ${({ theme }) => theme.textSecondary};

	svg {
		transition: font-size 100ms linear, color 100ms linear;
		font-size: 1.25rem;
	}
`;

const ChannelHeader = styled.div`
	display: flex;
	flex: 1;

	h2 {
		font-size: 0.875rem;
		margin-left: 0.5rem;
	}
`;

const StyledAddRoundedIcon = styled(AddRoundedIcon)`
	cursor: pointer;

	:hover {
		color: ${({ theme }) => theme.backgroundAccent};
	}
`;

const ChannelsList = styled.div`
	/* border: 2px solid red; */
`;
