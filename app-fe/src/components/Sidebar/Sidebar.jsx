import React from "react";
import styled from "styled-components/macro";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import SidebarContent from "./SidebarContent";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
	return (
		<StyledSidebar>
			<SidebarHeader>
				<h4>CHATello</h4>
				<ExpandMoreRoundedIcon />
			</SidebarHeader>
			<SidebarContentWrapper>
				<SidebarContent />
			</SidebarContentWrapper>
			<SidebarFooter>
				<SidebarProfile />
			</SidebarFooter>
		</StyledSidebar>
	);
};

export default Sidebar;

const StyledSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.5;
	min-width: 200px;
	max-width: 350px;
	height: 100vh;
	background: ${({ theme }) => theme.backgroundPrimary};
	color: ${({ theme }) => theme.textPrimary};
`;

const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	padding: 1rem;
	font-size: 20px;
	background: ${({ theme }) => theme.backgroundSecondaryAlt};
	border-bottom: 2px solid ${({ theme }) => theme.backgroundSecondary};
`;

const SidebarContentWrapper = styled.div`
	height: 100%;
	flex: 1;
`;

const SidebarFooter = styled.div`
	background: ${({ theme }) => theme.backgroundSecondaryAlt};
	border-top: 2px solid ${({ theme }) => theme.backgroundSecondary};
	height: 80px;
`;
