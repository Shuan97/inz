import React from "react";
import styled from "styled-components/macro";

const SidebarChannel = ({ id, channel }) => {
	return (
		<StyledSidebarChannel onClick={() => console.log(new Date(Date.now()))}>
			<ChannelLabel>
				<span>#</span>
				Channel
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
